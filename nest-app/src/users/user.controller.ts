import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {


  @Get()
  getMethod() {
    const userService = new UserService();
    return userService.getAllUsers();
  }

  @Post()
  createUser() {
    const user = {
      id: 4,
      name: 'Tichala',
      age: 30,
      gender: 'male',
      isMarried: true,
    };
    const userService = new UserService();
    userService.createUser(user);
    return "New User Has Been Created !"
    
  }


  @Get(':id/:name/:gender?')
  getUserById(){

  }
}
