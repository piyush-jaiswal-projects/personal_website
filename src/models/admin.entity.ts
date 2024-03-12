import { EntitySchema } from "typeorm";
import { v4 as uuidV4 } from "uuid";

const AdminSchema = new EntitySchema({
  name: "Admins",
  tableName: "admin",
  columns: {
    id: {
      primary: true,
      unique: true,
      type: "uuid",
      default: () => `'${uuidV4()}'`,
    },
    username: {
      unique: true,
      type: "text",
      nullable: false,
    },
    password: {
      type: "text",
      nullable: false,
    },
  },
});

export default AdminSchema;
