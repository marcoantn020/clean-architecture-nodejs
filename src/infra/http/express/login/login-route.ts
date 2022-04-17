import { Router } from "express"
import ExpressAdapter from "../../../../application/adapter/express";
import { LoginController } from "../../../../application/controller/login/login-controller";

const router = Router();

router.post("/login", ExpressAdapter.create(LoginController.handle));

export default router