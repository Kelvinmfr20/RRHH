import { Router } from "express";
import  EmployeeController  from './controller/employee.controller';

const router = Router();

router.get('/',EmployeeController.getAll);
router.get('/:id',EmployeeController.findById);
router.post('/',EmployeeController.create);
router.put('/:id',EmployeeController.update);
router.delete('/:id', EmployeeController.delete);


export default router; 