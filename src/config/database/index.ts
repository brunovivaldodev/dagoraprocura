import { createConnection } from "mysql2";

const conection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});


export { conection }