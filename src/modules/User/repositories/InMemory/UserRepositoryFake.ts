import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import User from "../../entities/User";
import IUserRepository from "../IUserRepositories";


class UserRespositoryFake implements IUserRepository {

    public UsersRepository: User[] = []

    public async create({ email, name, password,number }: ICreateUserDTO) {
        let user = await this.findByEmail(email)
        
        if (user) {
            throw new Error("User already exists");
        }
        
        user = new User()

        Object.assign(user, {
            name, email, password, number
        })

        this.UsersRepository.push(user)

        return user
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        return this.UsersRepository.find((user) => user.getEmail() === email)
    }

    public async findById(user_id: string): Promise<User | undefined> {
        return this.UsersRepository.find((user) => user.getId() === user_id)
    }
}



export default UserRespositoryFake

