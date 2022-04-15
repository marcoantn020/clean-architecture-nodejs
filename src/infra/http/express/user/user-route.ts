
import { Router } from "express"
import ExpressAdapter from "../../../../application/adapter/express";
import { createUserController } from "../../../../application/controller/user/create-user-controller";
// import { authentication } from "../middleware"

const router = Router();

router.post("/user/create", ExpressAdapter.create(createUserController.handle));

export default router