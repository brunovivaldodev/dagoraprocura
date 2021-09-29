import Disappearance from "../../entities/Disappearance";
import DisappearancePlace from "../../entities/DisappearencePlace";
import { Provinces } from "../../entities/Provinces";
import State from "../../entities/State";
import { IDisappearanceRepository } from "../../repositories/IDisappearanceRepository";

interface IRequest {
    type: string
    user_id: string
    document: string
    disappearence_place: DisappearancePlace
    state: State
    location: {
        district: string,
        province: string
    }
}

export class CreateDisappearanceUseCase {
    constructor(private disappearanceRepository: IDisappearanceRepository) { }

    async execute({ type, user_id, disappearence_place, document, location, state }: IRequest): Promise<Disappearance> {

        if (!(location.province in Provinces)) {
            throw new Error("Invalid Province")
        }
        const disappearance = await this.disappearanceRepository.create({
            user_id,
            type,
            state,
            location: { district: location.district, province: location.province as Provinces },
            document,
            disappearence_place,
        })

        return disappearance

    }
}