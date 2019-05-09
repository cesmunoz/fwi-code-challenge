import * as express from "express";
import playersRouter from "../routes/players"

const router = express.Router();

router.use("/players", playersRouter);

export default router;
