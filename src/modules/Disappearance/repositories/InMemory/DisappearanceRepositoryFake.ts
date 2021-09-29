import { CreateDisappearanceDTO } from "../../dtos/CreateDisappearanceDTO";
import Disappearance from "../../entities/Disappearance";
import { IDisappearanceRepository } from "../IDisappearanceRepository";

export class DisappearanceRepositoryFake implements IDisappearanceRepository {

    public disappearanceRepository: Disappearance[] = []

    async create({ user_id, document, state, type, disappearence_place, location: { district, province } }: CreateDisappearanceDTO) {


        const disappearance = new Disappearance(district, province)

        Object.assign(disappearance, {
            disappearence_place,
            document,
            user_id,
            state,
            type,
        })

        disappearance.setLocation(district,province)

        this.disappearanceRepository.push(disappearance)

        return disappearance


    }
}