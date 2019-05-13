import { NextFunction, Request, Response } from "express";
import app from "./app";
import { HttpException } from "../util/httpException";

const port = process.env.PORT || 8000;

app.use(
  (err: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message =
      err.message || "Oops! An error has ocurred. Try again later.";
    res.status(status).json({
      status,
      message
    });
  }
);

app.listen(port, () => console.log(`Server listening on port ${port}`));
