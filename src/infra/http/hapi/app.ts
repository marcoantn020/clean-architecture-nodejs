
import Hapi from "@hapi/hapi";
import HapiAdapter from "../../../application/adapter/hapi/HapiAdapter";
import { CreateUserController } from "../../../application/controller/user/create-user-controller";

const server = Hapi.server({
    port: 3000,
    host: "localhost"
});

server.route({
    method: "POST",
    path: "/api/user/create",
    handler: HapiAdapter.create(CreateUserController.handle)
});

server.start();