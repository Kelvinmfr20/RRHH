import { Request, Response } from 'express';
import { Role, roles } from '../../../data/role';

class RoleController {
  static getAll(req: Request, res: Response) {
    res.json({
      data: [...roles],
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const role = [...roles].find((role: Role): boolean => {
      return id === role.id;
    });
    if (!role) {
      return res.status(404).json({
        ok: false,
        message: `Role with ID ${id} not found`
      });
    }
    res.json({
      data: role,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static create(req: Request, res: Response) {
    const role = req.body;
    roles.push({
      ...role,
      id: roles.length ? roles[roles.length - 1].id + 1 : 1,
    });
    res.json({
      data: role,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const roleIndex = roles.findIndex((role: Role): boolean => {
      return id === role.id;
    });
    if (roleIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Role with ID ${id} not found`
      });
    }
    const updatedRole = {
      ...roles[roleIndex],
      name: req.body.name,
      isActive: req.body.isActive,
      isByPass: req.body.isByPass,
    };
    roles[roleIndex] = { ...updatedRole };
    res.json({
      data: updatedRole,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const roleIndex = roles.findIndex((role: Role): boolean => {
      return id === role.id;
    });
    if (roleIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Role with ID ${id} not found`
      });
    }
    const deletedRole = roles.splice(roleIndex, 1);
    res.json({
      data: deletedRole,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }
}

export default RoleController;
