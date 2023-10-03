import { useState, useEffect } from "react";
import { Chart } from "../components";
import Wrapper from "../assets/wrappers/FormandChart";
import CalculatorForm from "../components/CalculatorForm";
import { calculateFeedingData } from "../utils/calculateFeedingData";

const Calculator = () => {
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

  useEffect(() => {
    setFormCompletion(
      Object.keys(dogData).every((key) => dogData[key]) &&
        dogData.feedingModel !== ""
    );
    calculateFeedingData(dogData, setFeedingData, 1);
  }, [dogData]);

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

  return (
    <Wrapper>
      <h1>Calculate Your Dog's Feeding Plan</h1>
      <div className="container">
        <CalculatorForm handleChange={handleChange} dogData={dogData} />

        {formCompletion && Object.keys(feedingData).length > 0 && (
          <Chart feedingData={feedingData} dogData={dogData} interval="daily" />
        )}
      </div>
    </Wrapper>
  );
};

export default Calculator;
