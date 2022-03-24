import express from "express";
import { createUser, findUser, deleteUser, updateUser, getUsers } from "../controllers/usersControllers.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;