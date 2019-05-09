import { Errback, NextFunction, Request, Response } from "express"
import app from "./app";

const port = 8000;

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(500).send("Oops! An error has ocurred. Try again later.");
  }
  next();
})

app.listen(port, () => console.log(`Server listening on port ${port}`));

