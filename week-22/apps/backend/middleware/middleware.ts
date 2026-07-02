import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface TokenPayload {
  id: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.token;

  if (!token) {
    res.status(411).json({ message : "token missing"})
    return
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === "string" || !("id" in decoded)) {
      res.status(401).json({
        message: "Invalid token",
      });
      return;
    }

    req.userId = decoded.id;

    next();
  } catch(err) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};