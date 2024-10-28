import { Router } from "express";
import employeeRoutes from "./employee/employee.routes"
import roleRoutes from "./role/role.routes"
import salaryRoutes from "./salary/salary.routes"
import punchRoutes from "./punch/punch.routes"
import authRoutes from "./auth/auth.routes"
import payrollRoutes from "./payroll/payroll.routes"



const router = Router();

router.use('/employee', employeeRoutes)
router.use('/role', roleRoutes)
router.use('/salary',salaryRoutes)
router.use('/punch', punchRoutes)
router.use('/auth', authRoutes)
router.use('/payroll', payrollRoutes)


export default router; 