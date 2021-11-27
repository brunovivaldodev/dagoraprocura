import { createConnection } from "mysql2";
import { config } from "dotenv"

config()

const conection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

console.log(process.env.DB_HOST, "teste")


export { conection }