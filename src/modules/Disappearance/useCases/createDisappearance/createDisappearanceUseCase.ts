import IUserRepository from "../../../User/repositories/IUserRepositories";
import Disappearance from "../../entities/Disappearance";
import DisappearancePlace from "../../entities/DisappearencePlace";
import { Provinces } from "../../entities/Provinces";
import State from "../../entities/State";
import TypeDocument from "../../entities/TypeDocument";
import { IDisappearanceRepository } from "../../repositories/IDisappearanceRepository";

interface IRequest {
    type: string
    user_id: string
    document: string
    disappearence_place: DisappearancePlace
    location: {
        district: string,
        province: string
    }
}

export class CreateDisappearanceUseCase {
    constructor(
        private disappearanceRepository: IDisappearanceRepository,
        private userRepository: IUserRepository
    ) { }

    async execute({ type, user_id, disappearence_place, document, location }: IRequest): Promise<Disappearance> {

        const findUser = await this.userRepository.findById(user_id)
        if (!findUser) {
            throw new Error("Cannot Create a Disappearance beacuse user not founded")
        }
        if (!(location.province in Provinces)) {
            throw new Error("Invalid Province")
        }
        if (!(type in TypeDocument)) {
            throw new Error("Invalid Type")
        }
        const disappearance = await this.disappearanceRepository.create({
            user_id,
            type,
            location: { district: location.district, province: location.province as Provinces },
            document,
            disappearence_place,
        })

        return disappearance

    }
}