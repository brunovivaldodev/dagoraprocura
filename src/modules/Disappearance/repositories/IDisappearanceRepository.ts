import { CreateDisappearanceDTO } from "../dtos/CreateDisappearanceDTO";
import Disappearance from "../entities/Disappearance";

export interface IDisappearanceRepository {
    create(data : CreateDisappearanceDTO) : Promise<Disappearance>
    findAllDisppearanceWithDatePassedAndStateDisappeared() : Promise<Disappearance[]>
    getAll () : Promise<Disappearance[]>
}