import { UuidProvider} from "../../../shared/providers/uuid/implemnetations/UuidProvider"

class User {

    private id: string;
    private name: string;
    private email: string;
    private password: string

    getEmail(){
        return this.email
    }

    constructor(){
        this.id = UuidProvider.uuid()
    }

}

export default User

