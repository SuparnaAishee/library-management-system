import { Router } from "express";

import { BookSchemas } from "./book.schemas";
import validateRequest from "../../utils/validateRequest";
import { BookControllers } from "./book.controller";

const router = Router();

// Route for get all books
router.get("/", BookControllers.findAll);

// Route for get unique book by id
router.get("/:id", BookControllers.findById);

// Route for create new book
router.post(
  "/",
  validateRequest(BookSchemas.creteSchema),
  BookControllers.create
);

// Route for update existing product
router.put(
  "/:id",
  validateRequest(BookSchemas.updateSchema),
  BookControllers.update
);

// Route for delete existing book
router.delete("/:id", BookControllers.deleteById);

export const BookRoutes = router;
