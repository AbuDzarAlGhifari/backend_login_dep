import { Sequelize } from "sequelize";

const db = new Sequelize('bsazxbjiu8ezgqev6agi', 'ucl95e9llj7nkbde', 'SDRWjnZkGN8wsuJdbh5Q', {
    host: "bsazxbjiu8ezgqev6agi-mysql.services.clever-cloud.com",
    dialect: "mysql",
    port: 3306,
});

export default db;
