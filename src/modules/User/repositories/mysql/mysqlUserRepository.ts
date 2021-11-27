import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import User from "../../entities/User";
import IUserRepository from "../IUserRepositories";

import { conection } from "../../../../config/database"


export class MysqlUserRepository implements IUserRepository {
    create({ name, email, number, password }: ICreateUserDTO): Promise<User> {
        conection.connect(function (err) {
            if (err) throw err;

            const datenow = new Date().toLocaleString()
            var sql = `INSERT INTO users (name, password,email,number,created_at, updated_at)
             VALUES  ('${name}', '${password}', '${email}', '${number}', '${datenow}','${datenow}')`;

            conection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result)
            });

        });
        return "" as unknown as Promise<User>
    }
    findByEmail(email: string): Promise<User | undefined> {
        return false as unknown as Promise<User>

    }
    findById(user_id: string): Promise<User | undefined> {
        return true as unknown as Promise<User>

    }

}
