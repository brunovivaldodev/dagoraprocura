import User from "../../entities/User";
import IUserRepository from "../../repositories/IUserRepositories";

interface IRequest {
    name: string
    email: string
    password: string
}

class CreateUserUseCase {

    constructor(private userRepository: IUserRepository) { }

    async execute({ email, name, password }: IRequest) : Promise<User> {

        let user = await this.userRepository.findByEmail(email)

        if (user) {
            throw new Error("User already exists");
        }
        user = await this.userRepository.create({email, password, name })
        return user
    }
}

export default CreateUserUseCase
