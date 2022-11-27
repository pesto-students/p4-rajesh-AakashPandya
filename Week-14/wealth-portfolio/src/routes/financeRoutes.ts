import {
  addFunds,
  deleteFunds,
  filteredFunds,
  getFunds,
  updateFunds,
} from "../controllers/financeController";

import authMiddleware from "../middleware/authMiddleware";
import express from "express";

const router = express.Router();

router.route("/fund/:type").post(authMiddleware, addFunds);

router.route("/fund/:type").put(authMiddleware, updateFunds);

router.route("/fund/:type").post(authMiddleware, getFunds);

router.route("/filtered/:type").post(authMiddleware, filteredFunds);

router.route("/fund/:id").delete(authMiddleware, deleteFunds);

export default router;
