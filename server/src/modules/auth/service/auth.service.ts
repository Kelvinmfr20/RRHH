import { User, users } from '../../../data/auth'; 

export class AuthService {
    getAllUsers(): User[] {
        return users;
    }

    findUser(username: string): User | undefined {
        return users.find(user => user.username === username);
    }
}
