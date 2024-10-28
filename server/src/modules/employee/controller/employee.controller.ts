import { Request, Response } from 'express';
import { Employee, employees } from '../../../data/employee'; 

class EmployeeController {
  static getAll(req: Request, res: Response) {
    res.json({
      data: [...employees],
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const employee = employees.find((e: Employee) => e.id === id); 
    if (!employee) {
      return res.status(404).json({
        ok: false,
        message: `Employee with ID ${id} not found`,
      });
    }
    res.json({
      data: employee,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static create(req: Request, res: Response) {
    const employee: Employee = req.body;
    employees.push({
      ...employee,
      id: employees.length ? employees[employees.length - 1].id + 1 : 1, 
    });
    res.json({
      data: employee,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const employeeIndex = employees.findIndex((e: Employee) => e.id === id); 
    if (employeeIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Employee with ID ${id} not found`,
      });
    }
    const updatedEmployee = {
      ...employees[employeeIndex],
      ...req.body,
    };
    employees[employeeIndex] = updatedEmployee;
    res.json({
      data: updatedEmployee,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const employeeIndex = employees.findIndex((e: Employee) => e.id === id); 
    if (employeeIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Employee with ID ${id} not found`,
      });
    }
    const deletedEmployee = employees.splice(employeeIndex, 1);
    res.json({
      data: deletedEmployee,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }
}

export default EmployeeController;
