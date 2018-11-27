import express from "express";
import sampleRoutes from "./app/api/sample/route";

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// mount sample routes at /sample
router.use("/sample", sampleRoutes);
export default router;
