import { useEffect, useState } from "react";
import { useLoaderData, redirect, useParams } from "react-router-dom";
import { BONE_PERCENTAGES, FEEDING_PERCENTAGES } from "../utils/constants";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Wrapper from "../assets/wrappers/Pet";
import customFetch from "../utils/customFetch";
import { calculateFeedingData } from "../utils/calculateFeedingData";

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

  useEffect(() => {
    calculateFeedingData(pet, setFeedingData);
  }, [pet]);

  let data;

  if (pet.feedingModel === "barf") {
    data = {
      labels: [
        `Muscular Tissue: ${feedingData.muscularTissue} oz`,
        `Muscular Organ: ${feedingData.muscularOrgan} oz`,
        `Edible Bone: ${feedingData.edibleBone} oz`,
        `Liver: ${feedingData.liver} oz`,
        `Other Secreting Organs: ${feedingData.otherOrgan} oz`,
        `Vegetables: ${feedingData.vegetables} oz`,
        `Seeds & Nuts: ${feedingData.seeds} oz`,
        `Fruits: ${feedingData.fruits} oz`,
      ],
      datasets: [
        {
          data: [
            feedingData.muscularTissue,
            feedingData.muscularOrgan,
            feedingData.edibleBone,
            feedingData.liver,
            feedingData.otherOrgan,
            feedingData.vegetables,
            feedingData.seeds,
            feedingData.fruits,
          ],
          backgroundColor: [
            "#e63900",
            "#990000",
            "#e9dacd",
            "#6C2E1F",
            "#993300",
            "#003300",
            "#C3AD7F",
            "#FFD54F",
          ],
        },
      ],
    };
  }

  if (pet.feedingModel === "pmr") {
    data = {
      labels: [
        `Muscular Tissue: ${feedingData.muscularTissue} oz`,
        `Muscular Organ: ${feedingData.muscularOrgan} oz`,
        `Edible Bone: ${feedingData.edibleBone} oz`,
        `Liver: ${feedingData.liver} oz`,
        `Other Secreting Organs: ${feedingData.otherOrgan} oz`,
      ],
      datasets: [
        {
          data: [
            feedingData.muscularTissue,
            feedingData.muscularOrgan,
            feedingData.edibleBone,
            feedingData.liver,
            feedingData.otherOrgan,
          ],
          backgroundColor: [
            "#e63900",
            "#990000",
            "#e9dacd",
            "#6C2E1F",
            "#993300",
          ],
        },
      ],
    };
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: `${pet.name}'s Daily Feeding Ratios`,
        font: {
          size: 18,
          weight: "bold",
        },
      },
      legend: {
        onClick: () => {},
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Wrapper>
      <button>Daily</button>
      <button>BiWeekly</button>
      <button>Monthly</button>
      <div className="results">
        <Doughnut data={data} options={options} height="700" width="700" />
      </div>
    </Wrapper>
  );
};

export default Pet;
