import Express from "express";
import { getData, postData } from "../Controller/BlogsController.js";

const routes = Express.Router();
routes.post("/new/work", postData);
routes.get("/new/work", getData);

export default routes;
