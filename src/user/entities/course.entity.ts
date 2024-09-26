// course.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the course' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the title of the course' })
  title: string;

  // Many-to-Many inverse relationship with User
  @ManyToMany(() => User, (user) => user.courses)
  @ApiProperty({ description: 'the students enrolled in the course' })
  users: User[];
}
