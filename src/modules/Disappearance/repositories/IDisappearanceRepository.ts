import { CreateDisappearanceDTO } from "../dtos/CreateDisappearanceDTO";
import Disappearance from "../entities/Disappearance";

export interface IDisappearanceRepository {
    create(data: CreateDisappearanceDTO): Promise<Disappearance>
    findAllDisppearanceCreatedWithDatePassedAndStateDisappeared(): Promise<Disappearance[]>
    getAll(): Promise<Disappearance[]>
    findAllDispearenceWithStateDispear(): Promise<Disappearance[] | undefined>
}