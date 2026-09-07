import { Router } from "express";

import { authenticate } from "../../middlewares/authenticate.middleware.js";
import { requireRole } from "../../middlewares/requireRole.middleware.js";

import {
  createUser,
  getUsers,
  updateUser,
} from "./users.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  requireRole("OWNER", "MANAGER"),
  getUsers,
);

router.post(
  "/",
  requireRole("OWNER", "MANAGER"),
  createUser,
);

router.patch(
  "/:userId",
  requireRole("OWNER", "MANAGER"),
  updateUser,
);

export default router;