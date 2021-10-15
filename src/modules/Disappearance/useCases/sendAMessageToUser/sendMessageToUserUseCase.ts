import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider";
import { DisappearanceRepositoryFake } from "../../repositories/InMemory/DisappearanceRepositoryFake";


export default class SendMessageToUserUseCase {

    constructor(
        private messageProvider: MessageBirdImplementation,
        private disappearanceRepository : DisappearanceRepositoryFake
    ) { }

   async  execute( to: string[], body: string,) {


        const t = await this.disappearanceRepository.findAllDisppearanceWithDatePassedAndStateDisappeared()



    }


}