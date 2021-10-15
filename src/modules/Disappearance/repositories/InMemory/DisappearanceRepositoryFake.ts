import { CreateDisappearanceDTO } from "../../dtos/CreateDisappearanceDTO";
import Disappearance from "../../entities/Disappearance";
import State from "../../entities/State";
import { IDisappearanceRepository } from "../IDisappearanceRepository";

export class DisappearanceRepositoryFake implements IDisappearanceRepository {



    public disappearanceRepository: Disappearance[] = []


    async getAll(): Promise<Disappearance[]> {
        return this.disappearanceRepository
    }

    async create({ user_id, document, type, disappearence_place, location: { district, province } }: CreateDisappearanceDTO) {

        const disappearance = new Disappearance(district, province)

        Object.assign(disappearance, {
            disappearence_place,
            document,
            user_id,
            type,
        })

        disappearance.setLocation(district, province)

        this.disappearanceRepository.push(disappearance)

        return disappearance

    }

    async findAllDisppearanceWithDatePassedAndStateDisappeared(): Promise<Disappearance[]> {

        function Dated(dissaper: Disappearance) {
            const dissaperDate = dissaper.getCreatedDate()
            const dissaperday = new Date(dissaperDate).getDate()
            const passedAWeek = dissaperday + 7
            console.log(dissaperday)
            console.log(passedAWeek)
            const today = new Date().getDate()

            return passedAWeek > today
        }

        const disappearances = this.disappearanceRepository
            .filter((disapear) => disapear.getSentMessage() === false)
            .filter((disapear) => disapear.getState() === State.disappeared)
            .filter(Dated)

        return disappearances
    }


}