import { Router } from 'express';
import { AuthController } from './controller/auth.controller'; 
import { authenticateJWT } from './middleware/auth.middleware'; 

const router = Router();
const authController = new AuthController();

router.post('/register', async (req, res) => {
    try {
        await authController.register(req, res);
    } catch (error) {
        console.error('Error en la ruta /register:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.post('/login', async (req, res) => {
    try {
        await authController.login(req, res);
    } catch (error) {
        console.error('Error en la ruta /login:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/protected', authenticateJWT, (req, res) => {
    res.send('This is a protected route');
});

export default router;
