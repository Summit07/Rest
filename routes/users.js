import express from "express";
import {
  getAllUsers,
  createUser,
  updateUser,
  deleateUser,
  getUserById,
} from "../controllers/users.js";

const router = express.Router();

// all routes here start with /users bcoz file name is users. so not right /users only /.
router.get("/", getAllUsers);

router.post("/", createUser);

// /users/:id stores in req.params. so use to match id.

router.get("/:id", getUserById);

router.delete("/:id", deleateUser);

router.patch("/:id", updateUser);
// router.put("/:id", updateUser);

export default router;
