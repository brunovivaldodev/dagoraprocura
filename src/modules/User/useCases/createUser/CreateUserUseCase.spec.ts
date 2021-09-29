import UserRespositoryFake from "../../repositories/InMemory/UserRepositoryFake"
import CreateUserUseCase from "./CreateUserUseCase"

describe("Create User", () => {

    let createUserUseCase: CreateUserUseCase
    let userRepository: UserRespositoryFake

    beforeEach(() => {
        userRepository = new UserRespositoryFake()
        createUserUseCase = new CreateUserUseCase(userRepository)
    })

    it("should create a user", async () => {

        const car = await createUserUseCase.execute({
            name: "Bruno Vivaldo",
            email: "brunolumeca@live.com",
            password: "@sdf"
        })

        expect(car).toHaveProperty("id")

    })

    it("should not create a user which already exists", async () => {

        expect(
            async () => {
                await createUserUseCase.execute({
                    name: "Bruno Vivaldo",
                    email: "brunolumecacf@live.com",
                    password: "@sdf"
                })

                await createUserUseCase.execute({
                    name: "Bruno Vivaldo",
                    email: "brunolumecacf@live.com",
                    password: "@sdf"
                })
            }
        ).rejects.toThrow()



    })

   
})