import Disappearance_Place from "./DisappearencePlace"
import Location from "./Location"
import State from "./State"
import { UuidProvider} from "../../../shared/providers/uuid/implemnetations/UuidProvider"
import { Provinces } from "./Provinces"

class Disappearance {
    private id : string
    private type : string
    private user_id : string
    private document : string
    private state : State
    private Disappearance_Place : Disappearance_Place
    private location : Location 

    constructor(district : string, province : Provinces) {
        this.id = UuidProvider.uuid()
        this.state = State.disappeared
        this.setLocation(district,province)
    }

    setLocation(district : string, province : Provinces) : void{
        this.location = new Location(district, province)
    }

    getState() : State{
        return this.state
    }

}


export default Disappearance