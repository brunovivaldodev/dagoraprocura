import { v4 as uuid } from "uuid"

export class UuidProvider {
 
   static  uuid(): string {
        return uuid()
    }

}