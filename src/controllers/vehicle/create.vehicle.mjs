import { prisma } from "../../config/prisma.mjs";

async function createVehicle(req, res) {
  const  {
    name,
    license,
    userId
  } = req.body;

  try {
    const vehicle = await prisma.vehicle.create({
      data: {
        name,
        license,
        userId 
      },
      select: {
        id: true,
        name: true,
        license: true,
        status: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            email: true
          }
        }
      }
    });
  
    if (!vehicle) {
      req.status(400).json({
        ok: false,
        message: "Vehicle not created"
        
      });
    }

    res.status(201).json({
      ok: true,
      message: "Vehicle created",
      vehicle
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Internal server error."
    });
  }
}

export default createVehicle;