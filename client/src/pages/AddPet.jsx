import Wrapper from "../assets/wrappers/FormandChart";
import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import PetForm from "../components/PetForm";
import customFetch from "../utils/customFetch";
import { calculateFeedingData } from "../utils/calculateFeedingData";
import { Chart } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    console.log("Image size cannot exceed 0.5MB");
    return null;
  }
  // const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/pets", formData);
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

const AddPet = () => {
  const [dogData, setDogData] = useState({
    name: "",
    weight: "",
    lifeStage: "",
    activityLevel: "",
    feedingModel: "",
    boneType: "",
  });

  const [feedingData, setFeedingData] = useState({});

  const [formCompletion, setFormCompletion] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lifeStage") {
      setDogData((prevDogData) => ({
        ...prevDogData,
        [name]: value,
        activityLevel: "",
        feedingModel: "",
        boneType: "",
      }));
      setFeedingData({});
    } else {
      setDogData((prevDogData) => {
        return {
          ...prevDogData,
          [name]: value,
        };
      });
    }
  };

  console.log(dogData);
  console.log(feedingData);

  console.log(formCompletion);
  console.log(Object.keys(feedingData).length > 0);

  useEffect(() => {
    setFormCompletion(
      Object.keys(dogData).every((key) => dogData[key]) &&
        dogData.feedingModel !== ""
    );
    calculateFeedingData(dogData, setFeedingData, 1);
  }, [dogData]);

  return (
    <Wrapper>
      <div className="container">
        <PetForm
          title="Create New Feeding Plan"
          labelText="Upload A Photo"
          dogData={dogData}
          handleChange={handleChange}
        />
        {formCompletion && Object.keys(feedingData).length > 0 && (
          <Chart feedingData={feedingData} dogData={dogData} interval="daily" />
        )}
      </div>
    </Wrapper>
  );
};

export default AddPet;
