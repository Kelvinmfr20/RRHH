import { Router } from "express";
import PunchController from "./controller/punch.controller";
const router = Router();

router.get('/',PunchController.getAll);
router.get('/:id',PunchController.findById);
router.post('/',PunchController.create);
router.put('/:id',PunchController.update);
router.delete('/:id',PunchController.delete);


export default router; 