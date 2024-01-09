import { Express } from "express";
import userRoutes from "./user.route";

const routes = (app: Express) => {
    // app.use("/users", userRoutes);
    userRoutes(app);
};

export default routes;
