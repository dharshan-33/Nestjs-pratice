import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'secured', description: 'The password of the user' })
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class UserResponseDto extends CreateUserDto {
  @ApiProperty({ description: 'Id', example: 25 })
  id: number;
}
