import express from "express";
import c from "../../../utils/controlHandler";
import controller from "./controller";

const router = express.Router();

router
  .route("/")
  // create new sample (accessed at POST /api/teams)
  .post(c(controller.create, ({ body }) => [body]))
  // list all samples (accessed at GET /api/teams)
  .get(c(controller.list, ({ query }) => [query]));

router
  .route("/:id([0-9a-fA-F]{24})")
  // update sample (accessed at PUT /api/teams/:id)
  .put(c(controller.update, ({ params, body }) => [params, body]))
  // remove sample (accessed at DELETE /api/teams/:id)
  .delete(c(controller.remove, ({ params }) => [params]))
  // get sample (accessed at GET /api/teams/:id)
  .get(c(controller.get, ({ params }) => [params]));

export default router;
