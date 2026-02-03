import { Router } from "express";
import { createClass, getClasses } from "../controllers/class.controller";

const router = Router();

router.post("/", createClass);
router.get("/", getClasses);

export default router;
