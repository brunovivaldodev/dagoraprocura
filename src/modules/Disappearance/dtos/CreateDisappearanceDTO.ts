import DisappearancePlace from "../entities/DisappearencePlace";
import { Provinces } from "../entities/Provinces";
import State from "../entities/State";

export interface CreateDisappearanceDTO {
    type: string
    user_id: string
    document: string
    state: State
    disappearence_place: DisappearancePlace
    location: {
        district : string,
        province : Provinces
    }
}