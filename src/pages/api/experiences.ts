import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, getErrorMessage, logError, ApiResponse } from "@/utils";
import { AppDataSource, connectDb, disconnectDb } from "@/db";
import { ExperienceSchema } from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connectDb();

    if (req.method === "GET") {
      const experiences = await AppDataSource.getRepository(
        ExperienceSchema,
      ).find({});
      res
        .status(200)
        .json(
          new ApiResponse(200, experiences, "Data fetched successfully!", true),
        );
    }

    if (req.method === "POST") {
      const exp = await AppDataSource.getRepository(ExperienceSchema).create(
        req.body,
      );
      const result =
        await AppDataSource.getRepository(ExperienceSchema).save(exp);

      if (!result) throw Error("Error creating experience!");

      res
        .status(200)
        .json(new ApiResponse(200, result, "Experience created!", true));
    }

    if (req.method === "DELETE") {
      const { id } = req.query;

      const exp = await AppDataSource.getRepository(ExperienceSchema).delete({
        id: id,
      });
      if (exp.affected === 0) throw Error("Error deleting experience!");

      res
        .status(200)
        .json(new ApiResponse(200, "", "Experience deleted!", true));
    }

    if (req.method === "PUT") {
      const { id } = req.query;
      const body = req.body;

      const exp = await AppDataSource.getRepository(ExperienceSchema).update(
        { id: id },
        body,
      );
      if (exp.affected === 0) throw Error("Error updating experience!");

      res
        .status(200)
        .json(new ApiResponse(200, "", "Experience updated!", true));
    }

    res.status(404).json(new ApiError(404, "Invalid request!"));
  } catch (error) {
    logError(error);
    const errMsg: string = getErrorMessage(error);
    res.status(500).json(new ApiError(500, errMsg));
  } finally {
    disconnectDb();
  }
}
