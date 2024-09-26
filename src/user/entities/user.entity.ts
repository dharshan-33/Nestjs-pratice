import {Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany,ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from './profile.entity';
import { Post } from './post.entity';
import { Course } from './course.entity';


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

    // One-to-One relationship with Profile
    @OneToOne(() => Profile, { cascade: true })
    @JoinColumn() // Specifies this entity owns the relationship
    @ApiProperty({ description: 'the profile of the user' })
    profile: Profile;

    @OneToMany(() => Post, (post) => post.user)
  @ApiProperty({ description: 'the posts written by the user' })
  posts: Post[];

    // Many-to-Many relationship with Course
    @ManyToMany(() => Course, (course) => course.users)
    @JoinTable() // Owning side of the relationship
    @ApiProperty({ description: 'the courses enrolled by the user' })
    courses: Course[];

}



