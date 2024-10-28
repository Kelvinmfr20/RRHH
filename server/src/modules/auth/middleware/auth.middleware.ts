import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: {
        username: string; 
    };
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1]; 
    if (!token) {

        return res.sendStatus(403) as unknown as void;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
        if (err) {
            return res.sendStatus(403); 
        }

        req.user = user as { username: string };
        next(); 
    });
};
