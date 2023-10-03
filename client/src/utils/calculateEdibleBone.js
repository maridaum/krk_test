import { BONE_PERCENTAGES } from "./constants";
import round from "./round";

const calculateEdibleBone = (bone, boneType) => {
  const bonePercentage = BONE_PERCENTAGES[boneType];
  return bone / bonePercentage;
};

export default calculateEdibleBone;
