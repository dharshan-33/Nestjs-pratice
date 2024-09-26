import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Comment } from './comment.entity';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the user' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the name of the user' })
  name: string;

  @Column({ unique: true })
  @ApiProperty({ description: 'the email of the user' })
  email: string;

  @Column({ nullable: false })
  @ApiProperty({ description: 'the password of the user' })
  password: string;

  //going to define the relationship for many to one (user&comment)
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
