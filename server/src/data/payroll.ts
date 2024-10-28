export interface Payroll {
    employeeId: number;
    baseSalary: number;
    hoursWorked: number;
    overtimeHours: number;
    totalPay: number;
    deductions: number;
    netPay: number;
    periodStart: Date;
    periodEnd: Date;
  }
  
  export const payrolls: Payroll[] = [];
