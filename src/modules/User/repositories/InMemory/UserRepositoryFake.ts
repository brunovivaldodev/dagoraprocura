import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import User from "../../entities/User";
import IUserRepository from "../IUserRepositories";


class UserRespositoryFake implements IUserRepository {


    public UsersRepository: User[] = []

    public async create({ email, name, password }: ICreateUserDTO) {
        const user = new User()

        Object.assign(user, {
            name, email, password
        })

        this.UsersRepository.push(user)

        return user
    }

    public async findByEmail(user_id: string): Promise<User | undefined> {
        return this.UsersRepository.find((user) => user.getEmail() === user_id)
    }
}



export default UserRespositoryFake

