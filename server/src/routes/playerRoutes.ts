import * as express from "express";
import { PlayerController } from "../controllers/playerController";

const router = express.Router();
const controller = new PlayerController();

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.deleteById);

export default router;
