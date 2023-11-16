import { Sequelize } from "sequelize";

const { POSTGRESQL_DATABASE, POSTGRESQL_PASSWORD} = process.env;
export default new Sequelize(
  `
    postgres://${POSTGRESQL_DATABASE}:${POSTGRESQL_PASSWORD}@cornelius.db.elephantsql.com/${POSTGRESQL_DATABASE}
  `
)