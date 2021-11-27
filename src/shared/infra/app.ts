import express from 'express'
import router from '../infra/http'
import { conection } from "../../config/database"
require("dotenv").config()

conection.connect()
const app = express()
app.use(express.json())

app.use(router)

app.listen(3333, () => {
    console.log('Server is running at port 3333')
})

export default app;
