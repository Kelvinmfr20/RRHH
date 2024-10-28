import express, { Application } from 'express';
import employeeRoutes from './modules/employee/employee.routes'; 
import roleRoutes from './modules/role/role.routes'; 
import salaryRoutes from './modules/salary/salary.routes'; 
import punchRoutes from './modules/punch/punch.routes'; 
import payrollRoutes from './modules/payroll/payroll.routes'; 
import authRoutes from './modules/auth/auth.routes';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employees', employeeRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/salary', salaryRoutes);
app.use('/api/punch', punchRoutes); 
app.use('/api/payroll', payrollRoutes);
app.use('/api/auth',authRoutes);

export default app;
