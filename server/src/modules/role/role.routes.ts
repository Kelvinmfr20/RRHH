import { Router } from "express";
import RoleController from "./controller/role.controller";
const router = Router();

router.get('/',RoleController.getAll);
router.get('/:id',RoleController.findById);
router.post('/',RoleController.create);
router.put('/:id',RoleController.update);
router.delete('/:id',RoleController.delete);


export default router; 