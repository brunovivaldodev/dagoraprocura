import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider"
import DisappearancePlace from "../../entities/DisappearencePlace"
import { Provinces } from "../../entities/Provinces"
import { DisappearanceRepositoryFake } from "../../repositories/InMemory/DisappearanceRepositoryFake"
import SendMessageToUserUseCase from "./sendMessageToUserUseCase"
describe("Send A Message To User", () => {

    let disappearanceRepositoryFake: DisappearanceRepositoryFake
    beforeAll(() => {
        disappearanceRepositoryFake = new DisappearanceRepositoryFake
        disappearanceRepositoryFake.create({
            user_id: "",
            type: "",
            disappearence_place: DisappearancePlace.taxi,
            location: { district: "Maianga", province: Provinces.Luanda },
            document: "",
            contact: 994322538,
        })


    })

    it("should sent a message to user after 6 days when a Disappearance is created without updated state", async () => {

        const messageBird = new MessageBirdImplementation()
        const sendMessageToUser = new SendMessageToUserUseCase(messageBird, disappearanceRepositoryFake)


        await sendMessageToUser.execute([process.env.MESSAGE_BIRD_NUMBER as string], "bruno bonito")

    })
})