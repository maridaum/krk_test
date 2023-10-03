import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import {
  LIFESTAGE,
  ACTIVITY_LEVEL,
  PUPPY_AGE,
  FEEDING_MODEL,
  BONE_TYPE,
} from "../utils/constants";

const CalculatorForm = ({ title, handleChange, dogData }) => {
  return (
    <form className="form">
      <h1 className="form-title">{title}</h1>
      <FormRow
        type="text"
        name="name"
        labelText="Dog's Name"
        value={dogData.name}
        onChange={handleChange}
      />

      <FormRow
        type="number"
        name="weight"
        labelText="Dog's Weight"
        value={dogData.weight}
        onChange={handleChange}
      />

      <FormRowSelect
        name="lifeStage"
        labelText="Life Stage"
        options={LIFESTAGE}
        value={dogData.lifeStage}
        onChange={handleChange}
      />

      {dogData.lifeStage === "puppy" ? (
        <FormRowSelect
          name="activityLevel"
          labelText="Puppy Age"
          options={PUPPY_AGE}
          value={dogData.activityLevel}
          onChange={handleChange}
        />
      ) : (
        <FormRowSelect
          name="activityLevel"
          labelText="Activity Level"
          options={ACTIVITY_LEVEL}
          value={dogData.activityLevel}
          onChange={handleChange}
        />
      )}

      <FormRowSelect
        name="feedingModel"
        labelText="Choose A Feeding Model"
        options={FEEDING_MODEL}
        value={dogData.feedingModel}
        onChange={handleChange}
      />

      <FormRowSelect
        name="boneType"
        labelText="Which raw meaty bone will you feed?"
        options={BONE_TYPE}
        value={dogData.boneType}
        onChange={handleChange}
      />
    </form>
  );
};

export default CalculatorForm;
