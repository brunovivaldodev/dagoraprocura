import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider";
import { IDisappearanceRepository } from "../../repositories/IDisappearanceRepository";


export default class SendMessageToUserUseCase {

    constructor(
        private messageProvider: MessageBirdImplementation,
        private disappearanceRepository: IDisappearanceRepository
    ) { }

    async execute(to: string[], body: string,) {


        const t = await this.disappearanceRepository.findAllDisppearanceCreatedWithDatePassedAndStateDisappeared()



    }


}