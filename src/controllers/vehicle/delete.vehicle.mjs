import { prisma } from "../../config/prisma.mjs";

async function deleteVehicle(req, res) {
  const { id } = req.params;

  try {
    const vehicle = await prisma.vehicle.delete({
      where: {
        id: Number(id)
      }
    });

    if (!vehicle) {
      res.status(400).json({
        ok: false,
        message: "Vehicle not deleted"
      });
    }

    res.status(200).json({
      ok: true,
      message: "Vehicle deleted", 
      vehicle
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Internal server error"
    });
  }
}

export default deleteVehicle;