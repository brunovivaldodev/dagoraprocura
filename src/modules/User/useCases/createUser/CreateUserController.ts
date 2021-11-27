import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";
import { MysqlUserRepository } from "../../repositories/mysql/mysqlUserRepository"


class CreateUserController {
    public async handle(request: Request, response: Response) {

        const { name, password, email, number } = request.body
        const createUserUseCase = new CreateUserUseCase(new MysqlUserRepository)
        const user = await createUserUseCase.execute({ name, password, email, number })

        return response.status(201).json(user)
    }
}

export default CreateUserController
