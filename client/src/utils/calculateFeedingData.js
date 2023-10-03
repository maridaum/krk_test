import round from "./round";
import calculateEdibleBone from "./calculateEdibleBone";
import { FEEDING_PERCENTAGES } from "./constants";

const calculateBarfAdult = (maintenance, dogData) => {
  const boneNeeded = maintenance * 0.1;
  const edibleBone = round(calculateEdibleBone(boneNeeded, dogData.boneType));
  const meatFromBones = edibleBone - boneNeeded;
  const muscularTissue = round(maintenance * 0.5 - meatFromBones);
  const muscularOrgan = round(maintenance * 0.2);
  const liver = round(maintenance * 0.05);
  const otherOrgan = round(maintenance * 0.05);
  const vegetables = round(maintenance * 0.07);
  const seeds = round(maintenance * 0.02);
  const fruits = round(maintenance * 0.01);

  return {
    dailyIntake: round(maintenance),
    muscularTissue,
    muscularOrgan,
    edibleBone,
    liver,
    otherOrgan,
    vegetables,
    seeds,
    fruits,
  };
};

const calculateBarfPuppy = (maintenance, dogData) => {
  const boneNeeded = maintenance * 0.17;
  const edibleBone = round(calculateEdibleBone(boneNeeded, dogData.boneType));
  const meatFromBones = edibleBone - boneNeeded;
  const muscularTissue = round(maintenance * 0.4 - meatFromBones);
  const muscularOrgan = round(maintenance * 0.18);
  const liver = round(maintenance * 0.07);
  const otherOrgan = round(maintenance * 0.07);
  const vegetables = round(maintenance * 0.07);
  const seeds = round(maintenance * 0.03);
  const fruits = round(maintenance * 0.01);

  return {
    dailyIntake: round(maintenance),
    muscularTissue,
    muscularOrgan,
    edibleBone,
    liver,
    otherOrgan,
    vegetables,
    seeds,
    fruits,
  };
};

const calculatePmrAdult = (maintenance, dogData) => {
  const boneNeeded = maintenance * 0.12;
  const edibleBone = round(calculateEdibleBone(boneNeeded, dogData.boneType));
  const meatFromBones = edibleBone - boneNeeded;
  const muscularTissue = round(maintenance * 0.51 - meatFromBones);
  const muscularOrgan = round(maintenance * 0.25);
  const liver = round(maintenance * 0.04);
  const otherOrgan = round(maintenance * 0.08);

  return {
    dailyIntake: round(maintenance),
    muscularTissue,
    muscularOrgan,
    edibleBone,
    liver,
    otherOrgan,
    vegetables: "",
    seeds: "",
    fruits: "",
  };
};

const calculatePmrPuppy = (maintenance, dogData) => {
  const boneNeeded = maintenance * 0.18;
  const edibleBone = round(calculateEdibleBone(boneNeeded, dogData.boneType));
  const meatFromBones = edibleBone - boneNeeded;
  const muscularTissue = round(maintenance * 0.45 - meatFromBones);
  const muscularOrgan = round(maintenance * 0.25);
  const liver = round(maintenance * 0.04);
  const otherOrgan = round(maintenance * 0.08);

  return {
    dailyIntake: round(maintenance),
    muscularTissue,
    muscularOrgan,
    edibleBone,
    liver,
    otherOrgan,
    vegetables: "",
    seeds: "",
    fruits: "",
  };
};

export const calculateFeedingData = (dogData, setFeedingData, multiplier) => {
  const dogWeightOz = dogData.weight * 16;
  const feedingPercentage = FEEDING_PERCENTAGES[dogData.activityLevel];
  const maintenance = dogWeightOz * feedingPercentage * multiplier;

  if (dogData.feedingModel === "barf") {
    if (dogData.lifeStage === "adult") {
      setFeedingData(calculateBarfAdult(maintenance, dogData));
    } else if (dogData.lifeStage === "puppy") {
      setFeedingData(calculateBarfPuppy(maintenance, dogData));
    }
  } else if (dogData.feedingModel === "pmr") {
    if (dogData.lifeStage === "adult") {
      setFeedingData(calculatePmrAdult(maintenance, dogData));
    } else if (dogData.lifeStage === "puppy") {
      setFeedingData(calculatePmrPuppy(maintenance, dogData));
    }
  }
};
