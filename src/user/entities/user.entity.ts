import {Entity, Column,PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the user' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the name of the user' })
  name: string;

  @Column()
  @ApiProperty({ description: 'the password of the user' })
  password: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'the email of the user' })
  email: string;

  @Column({ nullable: true })
  @ApiProperty({ description: 'the mobileNumber of the user' })
  mobileNumber: string;
}



