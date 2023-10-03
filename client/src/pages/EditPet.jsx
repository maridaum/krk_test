import { useState, useEffect } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { Chart } from "../components";
import { calculateFeedingData } from "../utils/calculateFeedingData";
import PetForm from "../components/PetForm";
import Wrapper from "../assets/wrappers/FormandChart";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/pets/${params.id}`);
    return data;
  } catch (error) {
    console.log(error);
    redirect("/dashboard");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    console.log("Image size cannot exceed 0.5MB");
    return null;
  }
  try {
    await customFetch.patch(`/pets/${params.id}`, formData);
    return redirect("/dashboard");
  } catch (error) {
    return error;
  }
};

const EditPet = () => {
  const { pet } = useLoaderData();
  const { name, weight, lifeStage, activityLevel, feedingModel, boneType } =
    pet;

  const [dogData, setDogData] = useState({
    name,
    weight,
    lifeStage,
    activityLevel,
    feedingModel,
    boneType,
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
          title={`Update ${name}${
            name.slice(-1) === "s" ? "'" : "'s"
          } Feeding Plan`}
          labelText="Upload A New Photo(max 0.5 MB)"
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

export default EditPet;
