import { AppDataSource, connectDb, disconnectDb } from "@/db";
import AdminSchema from "@/models/admin.entity";
import { ApiError, ApiResponse, getErrorMessage, logError } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectDb();
  try {
    if (req.method === "POST") {
      const body = req.body;
      const user = await AppDataSource.getRepository(AdminSchema).findOne({
        where: {
          username: body.username,
        },
      });

      if (!user) {
        res
          .status(400)
          .json(new ApiResponse(400, "", "User does not exist!", false));
        return;
      }

      if (user.password === body.password) {
        res.status(200).json(new ApiResponse(200, "", "Login success!", true));
      }
    } else {
      res.status(404).json(new ApiResponse(404, "", "Invalid request!", false));
    }
  } catch (error) {
    logError(error);
    const errMsg = getErrorMessage(error);
    res.status(500).json(new ApiError(500, errMsg));
  } finally {
    disconnectDb();
  }
}
