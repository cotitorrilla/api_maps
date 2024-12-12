import { Router } from "express";
import {
  getAllMaps,
  getMapById,
  addMap,
  updateMap,
  deleteMap,
} from "../controllers/mapController.js";
import { authToken } from "../middleware/authMiddleware.js";
import validate from "../middleware/validate.js";
import { mapSchema } from "../validations/mapValidation.js";

const mapRoutes = Router();

mapRoutes.get("/", getAllMaps);
mapRoutes.get("/:id", getMapById);
mapRoutes.post("/", validate(mapSchema), authToken, addMap);
mapRoutes.put("/:id", validate(mapSchema), authToken, updateMap);
mapRoutes.delete("/:id", authToken, deleteMap);

export { mapRoutes };
