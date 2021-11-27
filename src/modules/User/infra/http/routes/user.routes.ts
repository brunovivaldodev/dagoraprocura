import CreateUserController from "../../../useCases/createUser/CreateUserController";
import { Router } from "express"

const routes = Router();

const createUserController = new CreateUserController


routes.post('', createUserController.handle)


export default routes
