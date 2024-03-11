import { AppDataSource, connectDb, disconnectDb, isDbConnected } from "@/db";
import AdminSchema from "@/models/admin.entity";
import { ApiError, ApiResponse, getErrorMessage, logError } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connectDb();
    if (req.method === "POST") {
      const admin = await AppDataSource.getRepository(AdminSchema).create(
        req.body,
      );
      const result = await AppDataSource.getRepository(AdminSchema).save(admin);
      if (!result) throw Error("Admin not created!");

      res
        .status(200)
        .json(new ApiResponse(200, result, "Admin created!", true));
    } else {
      res.status(404).json(new ApiResponse(404, "", "Invalid request!", false));
    }
  } catch (error) {
    logError(error);
    const errMsg = getErrorMessage(error);
    res.status(500).json(new ApiError(500, errMsg));
  } finally {
    if (isDbConnected()) disconnectDb();
  }
}
