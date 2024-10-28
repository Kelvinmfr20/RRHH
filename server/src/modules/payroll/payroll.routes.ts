import { Router } from 'express';
import PayrollController from './controller/payroll.controller';

const router = Router();

router.get('/', PayrollController.getAll);
router.get('/:id', PayrollController.findById);
router.post('/', PayrollController.create);
router.put('/:id', PayrollController.update);
router.delete('/:id', PayrollController.delete);

export default router;
