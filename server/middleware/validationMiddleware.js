import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import mongoose from "mongoose";
import Pet from "../models/PetModel.js";
import User from "../models/UserModel.js";
import { ACTIVITY_LEVEL, BONE_TYPE, FEEDING_MODEL, LIFESTAGE } from "../utils/constants.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no pet")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

const validatePetInput = withValidationErrors([
  body("name").notEmpty().withMessage("Pet name is required."),
  body("weight").notEmpty().withMessage("Pet weight is required."),
  body("lifeStage")
    .isIn(Object.values(LIFESTAGE))
    .withMessage("Invalid lifestage."),
  body("activityLevel")
    .isIn(Object.values(ACTIVITY_LEVEL))
    .withMessage("Invalid activity level."),
  body("feedingModel")
    .isIn(Object.values(FEEDING_MODEL))
    .withMessage("Invalid feeding model."),
  body("boneType")
    .isIn(Object.values(BONE_TYPE))
    .withMessage("Invalid bone type."),
]);

const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("Invalid MongoDB id");
    const pet = await Pet.findById(value);
    if (!pet) throw new NotFoundError(`no pet with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === pet.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw new UnauthorizedError("not authorized to access this route");
  }),
]);

const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("Name is required."),
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Valid email is required.")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("User with this email already exists.");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
]);

const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("Email is required.")
    .isEmail()
    .withMessage("Valid email is required."),
  body("password").notEmpty().withMessage("Password is required."),
]);

export {
  validatePetInput,
  validateIdParam,
  validateRegisterInput,
  validateLoginInput,
};
