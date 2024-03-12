import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, getErrorMessage, logError, ApiResponse } from "@/utils";
import { AppDataSource, connectDb, disconnectDb } from "@/db";
import { ArticleSchema } from "@/models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connectDb();

    if (req.method === "GET") {
      const articles = await AppDataSource.getRepository(ArticleSchema).find(
        {},
      );
      res
        .status(200)
        .json(
          new ApiResponse(200, articles, "Data fetched successfully!", true),
        );
    } else if (req.method === "POST") {
      const article = await AppDataSource.getRepository(ArticleSchema).create(
        req.body,
      );
      const result =
        await AppDataSource.getRepository(ArticleSchema).save(article);

      if (!result) throw Error("Error creating article!");

      res
        .status(200)
        .json(new ApiResponse(200, result, "Article created!", true));
    } else if (req.method === "DELETE") {
      const { id } = req.query;

      const article = await AppDataSource.getRepository(ArticleSchema).delete({
        id: id,
      });
      if (article.affected === 0) throw Error("Error deleting article!");

      res.status(200).json(new ApiResponse(200, "", "Article deleted!", true));
    } else if (req.method === "PUT") {
      const { id } = req.query;
      const body = req.body;

      const article = await AppDataSource.getRepository(ArticleSchema).update(
        { id: id },
        body,
      );
      if (article.affected === 0) throw Error("Error updating article!");

      res.status(200).json(new ApiResponse(200, "", "Article updated!", true));
    } else res.status(404).json(new ApiError(404, "Invalid request!"));
  } catch (error) {
    logError(error);
    const errMsg: string = getErrorMessage(error);
    res.status(500).json(new ApiError(500, errMsg));
  } finally {
    disconnectDb();
  }
}
