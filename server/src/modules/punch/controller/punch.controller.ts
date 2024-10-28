import { Request, Response } from 'express';
import { Punch, punchs } from '../../../data/punch'; // Asegúrate de que este archivo y tipo existan

class PunchController {
  static getAll(req: Request, res: Response) {
    res.json({
      data: [...punchs],
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static findById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const punch = punchs.find((punch: Punch): boolean => {
      return id === punch.id;
    });
    if (!punch) {
      return res.status(404).json({
        ok: false,
        message: `Punch with ID ${id} not found`,
      });
    }
    res.json({
      data: punch,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static create(req: Request, res: Response) {
    const punch = req.body;
    punchs.push({
      ...punch,
      id: punchs.length ? punchs[punchs.length - 1].id + 1 : 1,
    });
    res.json({
      data: punch,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const punchIndex = punchs.findIndex((punch: Punch): boolean => {
      return id === punch.id;
    });
    if (punchIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Punch with ID ${id} not found`,
      });
    }
    const updatedPunch = {
      ...punchs[punchIndex],
      poncheID: req.body.poncheID,
      fechaEntrada: req.body.fechaEntrada,
      isByPass: req.body.isByPass,
    };
    punchs[punchIndex] = { ...updatedPunch };
    res.json({
      data: updatedPunch,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const punchIndex = punchs.findIndex((punch: Punch): boolean => {
      return id === punch.id;
    });
    if (punchIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: `Punch with ID ${id} not found`,
      });
    }
    const deletedPunch = punchs.splice(punchIndex, 1);
    res.json({
      data: deletedPunch,
      ok: true,
      message: 'success',
      timestamp: new Date().getTime(),
    });
  }
}

export default PunchController;
