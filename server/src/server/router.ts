import * as express from "express";
import playersRouter from "../routes/playerRoutes";

const router = express.Router();

router.use("/players", playersRouter);

export default router;
