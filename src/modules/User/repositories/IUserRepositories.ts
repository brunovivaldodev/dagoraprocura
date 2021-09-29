import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import User from "../entities/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>
    findByEmail(user_id: string): Promise<User | undefined>
}

export default IUserRepository