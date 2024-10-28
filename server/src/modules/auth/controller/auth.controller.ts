import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { users, User } from '../../../data/auth'; 

export class AuthController {
    async register(req: Request, res: Response) {
        const { accountRegister, username, password, firstName, lastName } = req.body;

        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser: User = {
            accountRegister,
            username,
            password: hashedPassword,
            firstName,
            lastName,
            accountLogin: '',
            token: '',
            validity: new Date(),
            creationDate: new Date(),
            sid: '',
            permissions: [] 
        };

        users.push(newUser); // Agregar el nuevo usuario al array
        res.status(201).json(newUser);
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body;
        const user = users.find(user => user.username === username);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET!, {
            expiresIn: '1h',
        });

        user.token = token; 
        user.validity = new Date(Date.now() + 3600 * 1000);
        res.json({ token });
    }
}
