import { ArticleSchema, ExperienceSchema, ProjectSchema } from "@/models";
import AdminSchema from "@/models/admin.entity";
import { DbConnectionProps } from "@/types";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: 5432,
  username: process.env.NEXT_PUBLIC_DB_USERNAME,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB,
  synchronize: true,
  logging: false,
  entities: [ProjectSchema, ExperienceSchema, ArticleSchema, AdminSchema],
});

export const isDbConnected = () => {
  return AppDataSource.isInitialized;
};

export const connectDb = async () => {
  try {
    let response: DbConnectionProps = {
      success: false,
      msg: "invalid!",
    };

    if (isDbConnected() === false) {
      await AppDataSource.initialize()
        .then(() => {
          response.success = true;
          response.msg = "Db connected successfully!";
          console.log("Db Connected");
        })
        .catch((err) => {
          response.success = false;
          response.msg = err;
          console.log(`Db Connection Error \n ${err}`);
        })
        .finally(() => {
          return response;
        });
    } else {
      console.log("Db Already Connected");
      return {
        success: true,
        msg: "Db Already connected!",
      };
    }
  } catch (error) {
    console.log(error);
    throw Error();
  }
};

export const disconnectDb = () => {
  AppDataSource.destroy()
    .then(() => {
      console.log("Db disconnected!");
    })
    .catch((err) => {
      console.log("Error disconnecting db!");
      console.log(err);
    });
};
