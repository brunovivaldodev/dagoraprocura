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
            password: "@sdf",
            number: 900000000
        })
        expect(car).toHaveProperty("id")
        expect(car).toHaveProperty("name")
        expect(car).toHaveProperty("email")
        expect(car).toHaveProperty("password")
        expect(car).toHaveProperty("created_at")
        expect(car).toHaveProperty("updated_at")



    })

    it("should not create a user which already exists", async () => {

        expect(
            async () => {
                await createUserUseCase.execute({
                    name: "Bruno Vivaldo",
                    email: "brunolumecacf@live.com",
                    password: "@sdf",
                    number: 900000000
                })

                await createUserUseCase.execute({
                    name: "Bruno Vivaldo",
                    email: "brunolumecacf@live.com",
                    password: "@sdf",
                    number: 900000000

                })
            }
        ).rejects.toThrow()



    })


})