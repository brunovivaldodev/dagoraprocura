import { CreateDisappearanceDTO } from "../../dtos/CreateDisappearanceDTO";
import Disappearance from "../../entities/Disappearance";
import State from "../../entities/State";
import { IDisappearanceRepository } from "../IDisappearanceRepository";

export class DisappearanceRepositoryFake implements IDisappearanceRepository {



    public disappearanceRepository: Disappearance[] = []

    private readonly limitDay = 6;

    async getAll(): Promise<Disappearance[]> {
        return this.disappearanceRepository
    }

    async findAllDispearenceWithStateDispear(): Promise<Disappearance[] | undefined> {
        return this.disappearanceRepository.filter(disapear => disapear.getState() === State.disappeared)
    }

    async create({ user_id, document, type, disappearence_place, location: { district, province }, contact }: CreateDisappearanceDTO) {

        const disappearance = new Disappearance(district, province)

        Object.assign(disappearance, {
            disappearence_place,
            document,
            user_id,
            type,
            contact
        })

        disappearance.setLocation(district, province)

        this.disappearanceRepository.push(disappearance)

        return disappearance

    }

    private filterPassedDate(dissaper: Disappearance) {
        const dissaperDate = dissaper.getCreatedDate()

        const dissaperDateParsed = new Date(dissaperDate)

        const dayOfDisapearance = dissaperDateParsed.getDate()

        const limitDay = dissaperDateParsed.setDate(dayOfDisapearance + this.limitDay)

        return new Date().toLocaleDateString() === new Date(limitDay).toLocaleDateString()

    }

    public async findAllDisppearanceCreatedWithDatePassedAndStateDisappeared(): Promise<Disappearance[]> {

        const disappearance = this.disappearanceRepository
            .filter(disapear => disapear.getState() === State.disappeared)
            .filter(disapear => disapear.getSentMessage() === false)
            .filter(this.filterPassedDate.bind(this))

        return disappearance

    }

    public async findAllDisppearanceCreatedWithMessageSentAndStateDisappeared(): Promise<Disappearance[]> {

        const disappearance = this.disappearanceRepository
            .filter(disapear => disapear.getState() === State.disappeared)
            .filter(disapear => disapear.getSentMessage() === true)

        return disappearance
    }


}