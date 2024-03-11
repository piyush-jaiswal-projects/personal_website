import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

const ArticleSchema = new EntitySchema({
  name: "Articles",
  tableName: "articles",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      default: () => `'${uuidv4()}'`,
    },
    createdAt: {
      type: "date",
    },
    title: {
      type: "text",
    },
    desc: {
      type: "text",
    },
  },
});

export default ArticleSchema;
