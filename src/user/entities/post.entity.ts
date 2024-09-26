// post.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the post' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the title of the post' })
  title: string;

  @Column()
  @ApiProperty({ description: 'the content of the post' })
  content: string;

  // Many-to-One relationship with User
  @ManyToOne(() => User, (user) => user.posts)
  @ApiProperty({ description: 'the author of the post' })
  user: User;
}
