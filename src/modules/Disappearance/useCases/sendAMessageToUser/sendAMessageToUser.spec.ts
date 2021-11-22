import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider"
import DisappearancePlace from "../../entities/DisappearencePlace"
import { Provinces } from "../../entities/Provinces"
import { DisappearanceRepositoryFake } from "../../repositories/InMemory/DisappearanceRepositoryFake"
import SendMessageToUserUseCase from "./sendMessageToUserUseCase"
describe("Send A Message To User", () => {

    let b : DisappearanceRepositoryFake
    beforeAll(() => {
        b = new DisappearanceRepositoryFake
        b.create({
            user_id : "",
            type : "",
            disappearence_place : DisappearancePlace.taxi,
            location : {district : "Maianga",province : Provinces.Luanda},
            document : "",
        })
      

    })

    it("should sent a message to user after 4 days when a Disappearance is created without updated state", () => {

        const messageBird = new MessageBirdImplementation()
        const sendMessageToUser = new SendMessageToUserUseCase(messageBird, b)


        sendMessageToUser.execute(["+244925767197"], "bruno bonito")

    })
})