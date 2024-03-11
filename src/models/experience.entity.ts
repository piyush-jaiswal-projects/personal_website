import { EntitySchema } from "typeorm";
import { v4 as uuidv4 } from "uuid";

const ExperienceSchema = new EntitySchema({
  name: "Experience",
  tableName: "experience",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      default: () => `'${uuidv4()}'`,
    },
    startDate: {
      type: "date",
    },
    endDate: {
      type: "date",
    },
    company: {
      type: "text",
    },
    profile: {
      type: "text",
    },
    description: {
      type: "text",
    },
    refUrl: {
      type: "text",
    },
  },
});

export default ExperienceSchema;
