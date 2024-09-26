import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'the unique identifier of the profile' })
  id: number;

  @Column()
  @ApiProperty({ description: 'the bio of the user' })
  bio: string;

   // One-to-One inverse relationship with User
   @OneToOne(()=> User, (user)=> user.profile)
   @ApiProperty({ description: 'the user this profile belongs to' })
   user: User;
 }