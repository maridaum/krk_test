import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Chart = ({ dogData, feedingData, interval }) => {
  const {
    muscularTissue,
    muscularOrgan,
    edibleBone,
    liver,
    otherOrgan,
    vegetables,
    seeds,
    fruits,
  } = feedingData;

  const { feedingModel } = dogData;

  let data;

  if (feedingModel === "barf") {
    data = {
      labels: [
        `Muscular Tissue: ${muscularTissue} oz`,
        `Muscular Organ: ${muscularOrgan} oz`,
        `Edible Bone: ${edibleBone} oz`,
        `Liver: ${liver} oz`,
        `Other Secreting Organs: ${otherOrgan} oz`,
        `Vegetables: ${vegetables} oz`,
        `Seeds & Nuts: ${seeds} oz`,
        `Fruits: ${fruits} oz`,
      ],
      datasets: [
        {
          data: [
            muscularTissue,
            muscularOrgan,
            edibleBone,
            liver,
            otherOrgan,
            vegetables,
            seeds,
            fruits,
          ],
          backgroundColor: [
            "#e63900",
            "#990000",
            "#e9dacd",
            "#551B1B",
            "#9E4545",
            "#003300",
            "#8F775A",
            "#FFD54F",
          ],
          borderWidth: 0.5,
        },
      ],
    };
  }

  if (feedingModel === "pmr") {
    data = {
      labels: [
        `Muscular Tissue: ${muscularTissue} oz`,
        `Muscular Organ: ${muscularOrgan} oz`,
        `Edible Bone: ${edibleBone} oz`,
        `Liver: ${liver} oz`,
        `Other Secreting Organs: ${otherOrgan} oz`,
      ],
      datasets: [
        {
          data: [muscularTissue, muscularOrgan, edibleBone, liver, otherOrgan],
          backgroundColor: [
            "#e63900",
            "#990000",
            "#e9dacd",
            "#551B1B",
            "#9E4545",
          ],
          borderWidth: 0.5,
        },
      ],
    };
  }

  const options = {
    plugins: {
      title: {
        display: true,
        text: `${dogData.name}${
          dogData.name.slice(-1) === "s" ? "'" : "'s"
        } ${interval.charAt(0).toUpperCase()}${interval.slice(
          1
        )} Feeding Ratios`,
        font: {
          size: 25,
          weight: 400,
          family: "Montserrat",
        },
        color: "rgba(0, 0, 0)",
      },
      legend: {
        onClick: () => {},
        position: "top",
        labels: {
          font: {
            size: 12,
            family: "Montserrat",
          },
          boxHeight: 12,
          padding: 10,
          color: "rgba(0, 0, 0)",
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="chart">
      <Doughnut data={data} options={options} height="500" width="500" />
    </div>
  );
};

export default Chart;
