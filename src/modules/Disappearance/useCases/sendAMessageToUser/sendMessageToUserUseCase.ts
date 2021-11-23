require('dotenv').config()

import { MessageBirdImplementation } from "../../../../shared/providers/messageProvider/implementations/messagebirdProvider";
import { IDisappearanceRepository } from "../../repositories/IDisappearanceRepository";


export default class SendMessageToUserUseCase {

    constructor(
        private messageProvider: MessageBirdImplementation,
        private disappearanceRepository: IDisappearanceRepository
    ) { }

    async execute(to: string[], body: string,) {

        const dissapearances = await this.disappearanceRepository.findAllDisppearanceCreatedWithDatePassedAndStateDisappeared()

        dissapearances.forEach((dissapear) => {
            this.messageProvider.send({ to: ["+244" + dissapear.getContact() as unknown as string], body })
        })

    }


}

