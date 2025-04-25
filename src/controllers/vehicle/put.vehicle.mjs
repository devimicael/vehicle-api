import { prisma } from "../../config/prisma.mjs";
async function putVehicle(req, res) {
  const { id } = req.params;
  const { name, license, status } = req.body;

  try {
    const vehicle = await prisma.vehicle.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        license,
        status
      }
    });

    if (!vehicle) {
      res.status(400).json({
        ok: false,
        message: "Vehicle not updated"
      });
    }

    res.status(200).json({
      ok: true,
      message: "Vehicle updated",
      vehicle
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Internal server error"
    });
  }
}

export default putVehicle;