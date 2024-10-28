import { Router } from "express";
import SalaryController from "./controller/salary.controller";
const router = Router();

router.get('/',SalaryController.getAll);
router.get('/:id',SalaryController.findById);
router.post('/',SalaryController.create);
router.put('/:id',SalaryController.update);
router.delete('/:id',SalaryController.delete);


export default router; 