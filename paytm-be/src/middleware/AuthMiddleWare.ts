import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export interface AuthRequest extends Request {
  userId?: string
}

export function AuthMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers["token"] as string

  if (!token) {
    return res.status(401).json({ msg: "not authorized" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "default password") as JwtPayload
    req.userId = decoded.id
    next()
  } catch (error) {
    return res.status(401).json({ msg: "invalid or expired token" })
  }
}
