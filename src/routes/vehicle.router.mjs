import express from "express";
import { 
  createVehicle, 
  getVehicle, 
  deleteVehicle, 
  putVehicle 
} from "../controllers/vehicle/index.mjs";

const router = express.Router();

router.post("/", createVehicle);
router.get("/", getVehicle);
router.delete("/:id", deleteVehicle);
router.put("/:id", putVehicle);

export {
  router
};