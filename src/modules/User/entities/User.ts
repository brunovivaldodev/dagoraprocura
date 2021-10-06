import { UuidProvider} from "../../../shared/providers/uuid/implemnetations/UuidProvider"

class User {

    private id: string;
    private name: string;
    private email: string;
    private password: string
    private number : number
    private created_at : String
    private updated_at : String

    getEmail(){
        return this.email
    }

    getId(){
        return this.id
    }

    constructor(){
        this.id = UuidProvider.uuid(),
        this.created_at = new Date().toISOString()
        this.updated_at = new Date().toISOString()
    }

}

export default User

