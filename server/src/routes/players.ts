import * as express from "express";
import * as controller from "../controllers/players"

const router = express.Router();

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.deleteById);

export default router;