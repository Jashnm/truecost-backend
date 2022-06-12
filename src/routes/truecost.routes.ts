import express from "express";
import calculateEmissionController from "../controllers/calculateEmission.controller";
import protect from "../middleware/auth";
import { preHandler } from "../middleware/preHandler";
const router = express.Router();

router.post("/:type", protect, preHandler, calculateEmissionController);

export default router;
