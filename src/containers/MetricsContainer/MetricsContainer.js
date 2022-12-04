import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axiosPrivate from "../../api/axiosPrivate";

ChartJs.register(Tooltip, Title, ArcElement, Legend);

const MetricsContainer = () => {
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
    labels: ["Red", "Yellow", "Blue"],
  });
  useEffect(() => {
    axiosPrivate
      .get("metrics")
      .then((res) => {
        const { data } = res || {};
        console.log(res.data);
        const { bugsCount, featuresCount, feedbacksCount } = data;
        const label = ["Bug", "Feature", "Feedback"];
        const chartData = [
          bugsCount || 0,
          featuresCount || 0,
          feedbacksCount || 0,
        ];
        setData({
          datasets: [
            {
              data: chartData,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
            },
          ],
          labels: label,
        });
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  }, []);
  return (
    <div
      style={{
        width: "30%",
        height: "30%",
        marginLeft: "40%",
        marginTop: "15%",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default MetricsContainer;
