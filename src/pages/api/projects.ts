import { AppDataSource, connectDb, disconnectDb } from "@/db";
import { ProjectSchema } from "@/models";
import { ApiError, ApiResponse, getErrorMessage, logError } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await connectDb();

    if (req.method === "GET") await getRequest(req, res);

    if (req.method === "POST") await postRequest(req, res);

    if (req.method === "DELETE") await deleteRequest(req, res);

    if (req.method === "PUT") await putRequest(req, res);

    res.status(404).json(new ApiError(404, "Invalid request!"));
  } catch (error) {
    logError(error);
    const errMsg: string = getErrorMessage(error);
    res.status(500).json(new ApiError(500, errMsg));
  } finally {
    disconnectDb();
  }
}

const getRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("executing get request");
  const projects = await AppDataSource.getRepository(ProjectSchema).find({});
  res
    .status(200)
    .json(new ApiResponse(200, projects, "Data fetched successfully!", true));
};

const postRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("executing post request");
  const project = await AppDataSource.getRepository(ProjectSchema).create(
    req.body,
  );
  const result = await AppDataSource.getRepository(ProjectSchema).save(project);

  if (!result) throw Error("Error creating project!");

  res.status(200).json(new ApiResponse(200, result, "Project created!", true));
};

const deleteRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("executing delete request");
  const { id } = req.query;

  const project = await AppDataSource.getRepository(ProjectSchema).delete({
    id: id,
  });
  if (project.affected === 0) throw Error("Error deleting project!");

  res.status(200).json(new ApiResponse(200, "", "Project deleted!", true));
};

const putRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("executing put request");
  const { id } = req.query;
  const body = req.body;

  const project = await AppDataSource.getRepository(ProjectSchema).update(
    { id: id },
    body,
  );
  if (project.affected === 0) throw Error("Error updating project!");

  res.status(200).json(new ApiResponse(200, "", "Project updated!", true));
};
