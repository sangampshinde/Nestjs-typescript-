import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UsersController{
    @Get()
    getMethod(){
        return "You Send A GET Request!";
    }

    @Post()
    createUser(){
        return "Created A User!";
    }

}