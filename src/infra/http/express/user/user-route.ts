
import { Router } from "express"
import ExpressAdapter from "../../../../application/adapter/express";
import { CreateUserController } from "../../../../application/controller/user/create-user-controller";
import { ListUserController } from "../../../../application/controller/user/list-user-controller";
import middleware from "../middleware";


const router = Router();

router.post("/user/create", ExpressAdapter.create(CreateUserController.handle));
router.get("/user/list", middleware, ExpressAdapter.create(ListUserController.handle));

export default router