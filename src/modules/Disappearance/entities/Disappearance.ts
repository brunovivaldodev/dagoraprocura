import Disappearance_Place from "./DisappearencePlace"
import Location from "./Location"
import State from "./State"
import { UuidProvider} from "../../../shared/providers/uuid/implemnetations/UuidProvider"
import { Provinces } from "./Provinces"
import TypeDocument from "./TypeDocument"

class Disappearance {
    private id : string
    private type : TypeDocument
    private user_id : string
    private document : string
    private state : State
    private Disappearance_Place : Disappearance_Place
    private location : Location 
    private message_sent : boolean
    private created_at : String
    private updated_at : String

    constructor(district : string, province : Provinces) {
        this.id = UuidProvider.uuid()
        this.state = State.disappeared
        this.created_at = new Date().toISOString()
        this.updated_at = new Date().toISOString()
        this.setLocation(district,province)
        this.message_sent = false
    }

    setLocation(district : string, province : Provinces) : void{
        this.location = new Location(district, province)
    }

    getState() : State{
        return this.state
    }

}


export default Disappearance