import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/items.js";

const item_routes = Router();

item_routes.get("/getAllItems", getItems);

item_routes.post("/createNewItem", createItem);

item_routes.delete("/deleteItem/:item_id", deleteItem);

item_routes.put("/updateItem/:item_id", updateItem);

export default item_routes;
