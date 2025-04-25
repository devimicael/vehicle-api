import { prisma } from "../../config/prisma.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function createUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
      },
    });

    if (!user) {
      res.status(400).json({
        ok: false,
        message: "User not created",
      });
    }

    res.status(201).json({
      ok: true,
      message: "User created",
      user,
    });
  } catch (error) {
    if (error.code === "P2002") {
      res.status(400).json({
        ok: false,
        message: "User already exists",
      });
    }

    res.status(500).json({
      ok: false,
      message: "Internal server error",
      error,
    });
  } 
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },    
    });

    if (!user) {    
      res.status(400).json({
        ok: false,
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.status(400).json({
        ok: false,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      ok: true,
      message: "User logged in",
      user,
      token,
    });
    
  } catch (error) {
    res.status(500).json({
      ok: false,    
      message: "Internal server error",
    });
  }
}
