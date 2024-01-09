import { Express } from "express";
import * as userController from "../controllers/user.controller";

const userRoutes = (app: Express) => {
	app.get("/users/", userController.list);
	app.post("/users/", userController.create);
	app.get("/users/:id", userController.get);
	app.put("/users/:id", userController.update);
	app.delete("/users/:id", userController.remove);
};

export default userRoutes;
