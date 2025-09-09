export class UserService {

  users: { id:number ,name: string; age: number; gender: string; isMarried: boolean }[] = [
    {
      id:1,
      name: 'tony stark',
      age: 40,
      gender: 'male',
      isMarried: true,
    },

    {
      id:2,
      name: 'peter parker',
      age: 19,
      gender: 'male',
      isMarried: false,
    },

    {
      id:3,
      name: 'Natasha romenoff',
      age: 30,
      gender: 'female',
      isMarried: false,
    },

  ];



  getAllUsers(){
    return this.users
  }

  getUserById(id:number){

    return this.users.find(x=>x.id=== id);

  }


  createUser(user:{ id:number ,name: string; age: number; gender: string; isMarried: boolean }){
    
    this.users.push(user)

  }
}
