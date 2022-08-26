import express from "express";
import {
  createFood,
  updateFood,
  deleteFoodById,
  getAllFood,
} from "./menu.controller";

const menuRouter = express.Router();
menuRouter.get("/", getAllFood);
menuRouter.post("/", createFood);
menuRouter.delete("/:id", deleteFoodById);
menuRouter.put("/:id", updateFood);

export default menuRouter;
