import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

const ProjectSchema = new EntitySchema({
  name: "Project",
  tableName: "project",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      default: () => `'${uuidv4()}'`,
    },
    title: {
      type: "text",
    },
    description: {
      type: "text",
    },
    githubUrl: {
      type: "text",
    },
    liveUrl: {
      type: "text",
    },
    coverImage: {
      type: "text",
    },
  },
});

export default ProjectSchema;
