import { UuidProvider } from "../../../shared/providers/uuid/implemnetations/UuidProvider"
import { Provinces } from "./Provinces"

class Location {
    private id: string
    private district: string
    private province: string
    private created_at : string
    private updated_at : string

    constructor(district: string, province: Provinces) {
        this.id = UuidProvider.uuid()
        this.district = district,
        this.province = province,
        this.created_at = new Date().toISOString(),
        this.updated_at = new Date().toISOString()
    }
}

export default Location