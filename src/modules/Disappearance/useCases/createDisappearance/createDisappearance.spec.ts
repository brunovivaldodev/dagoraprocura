import User from "../../../User/entities/User"
import UserRespositoryFake from "../../../User/repositories/InMemory/UserRepositoryFake"
import DisappearancePlace from "../../entities/DisappearencePlace"
import { Provinces } from "../../entities/Provinces"
import State from "../../entities/State"
import { DisappearanceRepositoryFake } from "../../repositories/InMemory/DisappearanceRepositoryFake"
import { CreateDisappearanceUseCase } from "./createDisappearanceUseCase"

describe("Create Disappearance", () => {

    let disapearanceRepository: DisappearanceRepositoryFake
    let userRepository: UserRespositoryFake
    let createDisappearenceUseCase: CreateDisappearanceUseCase
    let user: User

    beforeAll(async () => {
        disapearanceRepository = new DisappearanceRepositoryFake
        userRepository = new UserRespositoryFake
        createDisappearenceUseCase = new CreateDisappearanceUseCase(disapearanceRepository, userRepository)
        user = await userRepository.create({
            name: "create user text",
            email: "createusertext@email.com",
            password: "#########"
        })
    })


    it("should create a new Disappearance", async () => {

        const disapper = await createDisappearenceUseCase.execute({
            type: "credit_card",
            user_id: user.getId(),
            document: "",
            disappearence_place: DisappearancePlace.taxi,
            location: { district: "Luanda", province: Provinces.Luanda },
            state: State.disappeared
        })

        expect(disapper).toHaveProperty("id")
        expect(disapper).toHaveProperty("location")
        expect(disapper.getState()).toBe("disappeared")
        expect(disapper).toHaveProperty("created_at")
        expect(disapper).toHaveProperty("updated_at")

    })

    it("should not create a new Disappearance with invalid user_id", async () => {

        expect(async () => {
            await createDisappearenceUseCase.execute({
                type: "credit_card",
                user_id: "",
                document: "",
                disappearence_place: DisappearancePlace.taxi,
                location: { district: "Luanda", province: Provinces.Luanda },
                state: State.disappeared
            })
        }).rejects.toThrowError(new Error("Cannot Create a Disappearance beacuse user not founded"))
    })

    it("should not create a new Disappearance with invalid Province", async () => {

        expect(async () => {
            await createDisappearenceUseCase.execute({
                type: "belas",
                user_id: user.getId(),
                document: "",
                disappearence_place: DisappearancePlace.taxi,
                location: { district: "Luanda", province: "Porto" },
                state: State.disappeared
            })
        }
        ).rejects.toThrowError(new Error("Invalid Province"))
    })

    it("should not create a new Disappearance with invalid Type", async () => {

        expect(async () => {
            await createDisappearenceUseCase.execute({
                type: "invalidtype",
                user_id: user.getId(),
                document: "",
                disappearence_place: DisappearancePlace.taxi,
                location: { district: "Luanda", province: Provinces.Benguela },
                state: State.disappeared
            })
        }
        ).rejects.toThrowError(new Error("Invalid Type"))
    })

})