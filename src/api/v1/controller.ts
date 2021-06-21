import { Request, Response } from "express";

class Controller {
  async refresh(req: Request, res: Response): Promise<Response> {
    return res.json({ success: true });
  }
}

export default new Controller();
