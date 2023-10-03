import { Router } from "express";
const router = Router();
import {
  validatePetInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import {
  getAllPets,
  createPet,
  getPet,
  updatePet,
  deletePet,
} from "../controllers/petController.js";
import upload from "../middleware/multerMiddleware.js";

router
  .route("/")
  .get(getAllPets)
  .post(upload.single("avatar"), validatePetInput, createPet);

router
  .route("/:id")
  .get(validateIdParam, getPet)
  .patch(validateIdParam, upload.single("avatar"), validatePetInput, updatePet)
  .delete(validateIdParam, deletePet);

export default router;
