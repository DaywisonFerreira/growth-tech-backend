import { Request, Response } from 'express';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string;
  website: string;
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

class PostController {
  async index(request: Request, response: Response) {
    try {
      const users = await axios.get(
        'http://jsonplaceholder.typicode.com/users',
      );

     const usersWithGroup = users.data.filter((user: User) => {
       return user.company.name.includes('Group')
     });

     const promises = usersWithGroup.map(async (user: User) => {
       const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
       return {
         ...user,
         posts: response.data
       }
     }

     );

     const results = await Promise.all(promises);
     return response.json(results)

    } catch (error) {
      console.log(error);
    }
  }
}

export default PostController;
