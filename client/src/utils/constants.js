const LIFESTAGE = [
  { label: "Select Life Stage", value: "" },
  { label: "Adult", value: "adult" },
  {
    label:
      "Puppy(2-12 Months for Small Breeds & 12-24 Months for Large Breeds)",
    value: "puppy",
  },
];

const ACTIVITY_LEVEL = [
  { label: "Select Activity Level", value: "" },
  { label: "Inactive", value: "inactive" },
  { label: "Average", value: "average" },
  { label: "Active", value: "active" },
  { label: "Athletic/Working", value: "athletic" },
];

const PUPPY_AGE = [
  { label: "Select Puppy's Age", value: "" },
  { label: "2 to 4 Months", value: "2to4" },
  { label: "4 to 6 Months", value: "4to6" },
  { label: "6 to 8 Months", value: "6to8" },
  { label: "8 to 12 Months", value: "8to12" },
  { label: "[Large Breeds]", value: "" },
  { label: "12 to 24 Months", value: "12to24" },
];

const FEEDING_MODEL = [
  { label: "Select Feeding Model", value: "" },
  { label: "Prey Model Raw (PMR)", value: "pmr" },
  { label: "Biologically Appropriate Raw Food (BARF)", value: "barf" },
];

const BONE_TYPE = [
  { label: "Select Bone Type", value: "" },
  { label: "Chicken/Turkey Thighs (20% Bone)", value: "thigh" },
  { label: "Chicken Leg Quarters (30% Bone)", value: "legQuarter" },
  { label: "Chicken Necks (36% Bone)", value: "chickenNeck" },
  { label: "Chicken Backs (44% Bone)", value: "chickenBack" },
  { label: "Chicken Wings (46% Bone)", value: "chickenWing" },
  { label: "Chicken/Duck Feet (60% Bone)", value: "feet" },
  { label: "Chicken/Duck/Rabbit Heads (75% Bone)", value: "head" },
  { label: "Chicken/Duck Frames (80% Bone)", value: "frame" },
  { label: "Duck Wings (39% Bone)", value: "duckWing" },
  { label: "Turkey Wings (33% Bone)", value: "turkeyWing" },
  { label: "Turkey Legs (38% Bone)", value: "turkeyLeg" },
  { label: "Turkey Necks (45% Bone)", value: "turkeyNeck" },
  { label: "Turkey Backs (50% Bone)", value: "turkeyBack" },
];

const FEEDING_PERCENTAGES = {
  inactive: 0.02,
  average: 0.025,
  active: 0.03,
  athletic: 0.035,
  "2to4": 0.1,
  "4to6": 0.08,
  "6to8": 0.06,
  "8to12": 0.04,
  "12to24": 0.04,
};

const BONE_PERCENTAGES = {
  thigh: 0.2,
  legQuarter: 0.3,
  chickenNeck: 0.36,
  chickenBack: 0.44,
  chickenWing: 0.46,
  feet: 0.6,
  head: 0.75,
  frame: 0.8,
  duckWing: 0.39,
  turkeyWing: 0.33,
  turkeyLeg: 0.38,
  turkeyNeck: 0.45,
  turkeyBack: 0.5,
};

export {
  LIFESTAGE,
  ACTIVITY_LEVEL,
  PUPPY_AGE,
  FEEDING_MODEL,
  BONE_TYPE,
  FEEDING_PERCENTAGES,
  BONE_PERCENTAGES,
};
