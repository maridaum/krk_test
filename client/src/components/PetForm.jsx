import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { Form } from "react-router-dom";
import {
  LIFESTAGE,
  ACTIVITY_LEVEL,
  PUPPY_AGE,
  FEEDING_MODEL,
  BONE_TYPE,
} from "../utils/constants";

const PetForm = ({
  title,
  labelText,
  handleChange,
  handleLifeStageChange,
  dogData,
  lifeStage,
}) => {
  const getDefaultValue = (property) =>
    dogData ? dogData[property] : undefined;

  return (
    <>
      <Form method="post" className="form" encType="multipart/form-data">
        <h1 className="form-title">{title}</h1>
        <FormRow
          type="text"
          name="name"
          labelText="Dog's Name"
          value={getDefaultValue("name")}
          onChange={handleChange}
        />

        <FormRow
          type="number"
          name="weight"
          labelText="Dog's Weight"
          value={getDefaultValue("weight")}
          onChange={handleChange}
        />

        <FormRowSelect
          name="lifeStage"
          labelText="Life Stage"
          options={LIFESTAGE}
          value={getDefaultValue("lifeStage")}
          onChange={handleChange || handleLifeStageChange}
        />

        {(dogData ? dogData.lifeStage === "adult" : lifeStage === "adult") && (
          <>
            <FormRowSelect
              name="activityLevel"
              labelText="Activity Level"
              options={ACTIVITY_LEVEL}
              value={getDefaultValue("activityLevel")}
              onChange={handleChange}
            />
            <FormRowSelect
              name="feedingModel"
              labelText="Choose A Feeding Model"
              options={FEEDING_MODEL}
              value={getDefaultValue("feedingModel")}
              onChange={handleChange}
            />

            <FormRowSelect
              name="boneType"
              labelText="Which raw meaty bone will you feed?"
              options={BONE_TYPE}
              value={getDefaultValue("boneType")}
              onChange={handleChange}
            />
          </>
        )}

        {(dogData ? dogData.lifeStage === "puppy" : lifeStage === "puppy") && (
          <>
            <FormRowSelect
              name="activityLevel"
              labelText="Puppy Age"
              options={PUPPY_AGE}
              value={getDefaultValue("activityLevel")}
              onChange={handleChange}
            />
            <FormRowSelect
              name="feedingModel"
              labelText="Choose A Feeding Model"
              options={FEEDING_MODEL}
              value={getDefaultValue("feedingModel")}
              onChange={handleChange}
            />

            <FormRowSelect
              name="boneType"
              labelText="Which raw meaty bone will you feed?"
              options={BONE_TYPE}
              value={getDefaultValue("boneType")}
              onChange={handleChange}
            />
          </>
        )}

        <div className="form-row">
          <label htmlFor="avatar" className="form-label">
            {labelText}
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="form-input"
            accept="image/*"
          ></input>
        </div>

        <button type="submit" className="form-btn">
          Submit
        </button>
      </Form>
    </>
  );
};

export default PetForm;
