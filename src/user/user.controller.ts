import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { CommentService } from 'src/comment/comment.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({
    description: 'The user object that needs to be created',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users',
    type: [UserResponseDto],
  })
  @ApiResponse({
    status: 500,
    description: 'Internal Server Error',
    schema: {
      example: {
        statusCode: 500,
        message: 'Internal server error',
        error: 'Internal Server Error',
      },
    },
  })
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully retrieved.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
    schema: {
      example: {
        statusCode: 404,
        message: 'User does not exist!',
        error: 'Not Found',
      },
    },
  })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return user;
  }

  @Get(':id/comments')
  getUserComment(@Param('id') id: string) {
    return this.commentService.findUserComments(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiBody({
    description: 'The user object that needs to be updated',
    schema: {
      example: {
        userName: 'dharshan',
        password: 'newpass123',
        age: 31,
      },
    },
  })
  @ApiResponse({
    status: 200,
    schema: {
      example: {
        userName: 'dharshan RV',
        password: 'newpass123',
        age: 31,
      },
    },
    description: 'The user has been successfully updated.',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
    schema: {
      example: {
        statusCode: 404,
        message: 'User does not exist!',
        error: 'Not Found',
      },
    },
  })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userService.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException('User does not exist!');
    }
    return user;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
    schema: {
      example: {
        message: 'User deleted successfully',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'User not found.',
    schema: {
      example: {
        statusCode: 404,
        message: 'User does not exist!',
        error: 'Not Found',
      },
    },
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.userService.remove(id);
    return { message: 'User deleted successfully' };
  }
}
