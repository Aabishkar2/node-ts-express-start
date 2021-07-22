import { Request, Response } from "express";
import fetch from "node-fetch";
import { todayPriceHeader } from "../../utils/headers";

class Controller {
  async refresh(req: Request, res: Response): Promise<Response> {
    return res.json({ success: true });
  }

  async getTodayPrice(
    req: Request & {
      query: {
        page?: number;
        size?: number;
        date?: string;
      };
    },
    res: Response
  ): Promise<Response> {
    try {
      let queryParam;
      if (req.query) {
        queryParam = new URLSearchParams({
          page: req.query.page ? req.query.page.toString() : "",
          size: req.query.size ? req.query.size.toString() : "",
          businessDate: req.query.date ? req.query.date.toString() : "",
        });
      }
      const url =
        "https://newweb.nepalstock.com/api/nots/nepse-data/today-price?" +
        queryParam;
      const options = {
        method: "POST",
        headers: todayPriceHeader,
        body: JSON.stringify({
          id: "234",
        }),
      };
      const data = await fetch(url, options);
      const resultJson = await data.json();
      return res.json(resultJson);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Controller();
