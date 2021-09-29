import { UuidProvider } from "../../../shared/providers/uuid/implemnetations/UuidProvider"
import { Provinces } from "./Provinces"

class Location {
    id: string
    district: string
    province: string

    constructor(district: string, province: Provinces) {
        this.id = UuidProvider.uuid()
        this.district = district,
        this.province = province
    }
}

export default Location