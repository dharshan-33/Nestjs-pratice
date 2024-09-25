import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  @IsNotEmpty()
  password: string;

 @ApiProperty({ example: 'johndoe@example.com', description: 'The email of the user' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

 @ApiProperty({ example: '1234567890', description: 'The mobile number of the user' })
  @IsString()
  @IsOptional() 
  mobileNumber: string;  
}

export class UserResponseDto extends CreateUserDto {
  @ApiProperty({ description: 'Id', example: 25 })
  id: number;
}