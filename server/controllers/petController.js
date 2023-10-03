import { StatusCodes } from "http-status-codes";
import Pet from "../models/PetModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

const getAllPets = async (req, res) => {
  const pets = await Pet.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ pets });
};

const createPet = async (req, res) => {
  req.body.createdBy = req.user.userId;

  if (req.file) {
    //uplaod to cloudinary
    const res = await cloudinary.v2.uploader.upload(req.file.path);
    //if upload is successful, remove image from saving in database
    await fs.unlink(req.file.path);
    req.body.avatar = res.secure_url;
    req.body.avatarPublicId = res.public_id;
  }

  const pet = await Pet.create(req.body);
  res.status(StatusCodes.CREATED).json({ pet });
};

const getPet = async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  res.status(StatusCodes.OK).json({ pet });
};

const updatePet = async (req, res) => {
  if (req.file) {
    const res = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    req.body.avatar = res.secure_url;
    req.body.avatarPublicId = res.public_id;
  }

  const updatedPet = { ...req.body };

  const { id } = req.params;
  const oldPet = await Pet.findByIdAndUpdate(id, updatedPet);

  if (req.file && oldPet.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(oldPet.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "Pet successfully updated." });
};

const deletePet = async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findByIdAndDelete(id);

  if (pet.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(pet.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "Pet profile successfully deleted." });
};

export { getAllPets, createPet, getPet, updatePet, deletePet };
