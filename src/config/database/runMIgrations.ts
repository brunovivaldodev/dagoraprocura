import path from "path"
import fs from "fs"

import { conection } from "./index"

(async () => {

    const fileDatabaseDir = path.join(__dirname, "migrations")

    fs.readdir(fileDatabaseDir, (error, files) => {
        if (error) {
            console.log(error)
        }
        files.forEach(file => {
            fs.readFile(path.join(fileDatabaseDir, file), (error, content) => {
                if (error) {
                    console.log(error)
                }
                conection.connect(function (err) {
                    if (err) throw err;
                    conection.query(content.toString(), function (err, result) {
                        if (err) throw err;
                        console.log("Table created");
                    });
                });
            })
        })
    })

})()


