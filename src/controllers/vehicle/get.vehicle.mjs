import { prisma } from "../../config/prisma.mjs";

async function getVehicle(req, res) {
  try {
    const vehicles = await prisma.vehicle.findMany({
      include: {
        user: true
      }
    });

    if (!vehicles) {
      res.status(400).json({
        ok: false,
        message: "Vehicles not found"
      });
    }

    res.status(200).json({
      ok: true,
      vehicles
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Internal server error"
     });
  }
}

export default getVehicle;