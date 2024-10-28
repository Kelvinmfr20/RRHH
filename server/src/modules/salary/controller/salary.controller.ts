import { Request, Response } from 'express';
import { Salary, salaries } from '../../../data/salary';

class SalaryController {
  static getAll(req: Request, res: Response) {
    res.json({
      data: [...salaries],
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const salary = [...salaries].find((salary: Salary): boolean => {
      return id === salary.id;
    });
    if (!salary)
      res.status(404).json({
        ok: false,
        message: `Salary with ${id} not found`
      });
    res.json({
      data: salary,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static create(req: Request, res: Response) {
    const salary = req.body;
    salaries.push({
      ...salary,
      id: salaries.length ? salaries[salaries.length - 1].id + 1 : 1,
    });
    res.json({
      data: salary,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const salaryIndex = salaries.findIndex((salary: Salary): boolean => {
      return id === salary.id;
    });
    if (salaryIndex === -1)
      res.status(404).json({
        ok: false,
        message: `Salary with ${id} not found`
      });
    const salary = {
      ...salaries[salaryIndex],
      salary: req.body.salary,
  
    };
    salaries[salaryIndex] = { ...salary };
    res.json({
      data: salary,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const salaryIndex = salaries.findIndex((salary: Salary): boolean => {
      return id === salary.id;
    });
    if (salaryIndex === -1)
      res.status(404).json({
        ok: false,
        message: `Salary with ${id} not found`
      });
    const salary = salaries.splice(salaryIndex, 1);
    res.json({
      data: salary,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }
}

export default SalaryController;
