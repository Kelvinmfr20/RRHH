import { Request, Response } from 'express';
import { Payroll, payrolls } from '../../../data/payroll';

class PayrollController {
  static getAll(req: Request, res: Response) {
    res.json({
      data: [...payrolls],
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payroll = payrolls.find((p: Payroll) => p.employeeId === id);
    if (!payroll) {
      return res.status(404).json({
        ok: false,
        message: `Payroll with employeeId ${id} not found`,
      });
    }
    res.json({
      data: payroll,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static create(req: Request, res: Response) {
    const payroll: Payroll = req.body;
    payrolls.push({
      ...payroll,
      employeeId: payrolls.length ? payrolls[payrolls.length - 1].employeeId + 1 : 1,
    });
    res.json({
      data: payroll,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payrollIndex = payrolls.findIndex((p: Payroll) => p.employeeId === id);
    if (payrollIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Payroll with employeeId ${id} not found`,
      });
    }
    const updatedPayroll = {
      ...payrolls[payrollIndex],
      ...req.body,
    };
    payrolls[payrollIndex] = updatedPayroll;
    res.json({
      data: updatedPayroll,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payrollIndex = payrolls.findIndex((p: Payroll) => p.employeeId === id);
    if (payrollIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Payroll with employeeId ${id} not found`,
      });
    }
    const deletedPayroll = payrolls.splice(payrollIndex, 1);
    res.json({
      data: deletedPayroll,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }
}

export default PayrollController;
