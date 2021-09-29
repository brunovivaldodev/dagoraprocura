import Disappearance from "../../entities/Disappearance"
import DisappearancePlace from "../../entities/DisappearencePlace"
import { Provinces } from "../../entities/Provinces"
import State from "../../entities/State"
import { DisappearanceRepositoryFake } from "../../repositories/InMemory/DisappearanceRepositoryFake"
import { CreateDisappearanceUseCase } from "./createDisappearanceUseCase"

describe("Create Disappearance", () => {

    it("should create a new Disappearance", async () => {
        const disapearanceRepository = new DisappearanceRepositoryFake
        const createDisappearenceUseCase = new CreateDisappearanceUseCase(disapearanceRepository)

        const disapper = await createDisappearenceUseCase.execute({
            type: "",
            user_id: "",
            document: "",
            disappearence_place: DisappearancePlace.taxi,
            location: { district: "Luanda", province: Provinces.Luanda },
            state: State.disappeared
        })


        expect(disapper).toHaveProperty("id")
        expect(disapper).toHaveProperty("location")
        expect(disapper.getState()).toBe("disappeared")

    })

    it("should not create a new Disappearance with invalid Province", async () => {

        const disapearanceRepository = new DisappearanceRepositoryFake
        const createDisappearenceUseCase = new CreateDisappearanceUseCase(disapearanceRepository)

        expect( async () => {
            await createDisappearenceUseCase.execute({
                type: "",
                user_id: "",
                document: "",
                disappearence_place: DisappearancePlace.taxi,
                location: { district: "Luanda", province: "Porto" },
                state: State.disappeared
            })

        }
        ).rejects.toThrow()
    })




})