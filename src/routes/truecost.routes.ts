import express from "express";
import flightEmissionController from "../controllers/flightEmission.controller";
import protect from "../middleware/auth";
import {preHandler } from "../middleware/preHandler";
const router = express.Router();

router.post("/:type", protect, preHandler, flightEmissionController);

export default router;