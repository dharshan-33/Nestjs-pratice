import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  // Find all users
  async findAll() {
    return await this.userRepository.find();
  }

  // Find a user by ID
  async findOne(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  // Update a user by ID
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, updateUserDto);
    return await this.userRepository.findOneBy({ id });
  }

  // Remove a user by ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
