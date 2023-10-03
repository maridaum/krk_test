import { useEffect, useState } from "react";
import { useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/Pet";
import customFetch from "../utils/customFetch";
import { calculateFeedingData } from "../utils/calculateFeedingData";
import { Chart } from "../components";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/pets/${params.id}`);
    return data;
  } catch (error) {
    return redirect("/dashboard");
  }
};

const Pet = () => {
  const { pet } = useLoaderData();

  const [feedingData, setFeedingData] = useState({});
  const [prepInterval, setPrepInterval] = useState("daily");

  useEffect(() => {
    if (pet) {
      calculateFeedingData(pet, setFeedingData, 1);
    }
  }, [pet]);

  const handleClick = (e) => {
    const interval = e.target.value;

    setPrepInterval(interval);

    if (interval === "weekly") {
      calculateFeedingData(pet, setFeedingData, 7);
    } else if (interval === "bi-monthly") {
      calculateFeedingData(pet, setFeedingData, 15);
    } else if (interval === "monthly") {
      calculateFeedingData(pet, setFeedingData, 30);
    } else {
      calculateFeedingData(pet, setFeedingData, 1);
    }
  };


  return (
    <Wrapper>
      <Chart dogData={pet} feedingData={feedingData} interval={prepInterval} />

      <div className="interval-btns">
        <button
          type="button"
          value="daily"
          onClick={handleClick}
          className="interval-btn"
        >
          Daily
        </button>
        <button
          type="button"
          value="weekly"
          onClick={handleClick}
          className="interval-btn"
        >
          Weekly
        </button>
        <button
          type="button"
          value="bi-monthly"
          onClick={handleClick}
          className="interval-btn"
        >        
          Bi-Monthly
        </button>
        <button
          type="button"
          value="monthly"
          onClick={handleClick}
          className="interval-btn"
        >
          Monthly
        </button>
      </div>
    </Wrapper>
  );
};

export default Pet;
