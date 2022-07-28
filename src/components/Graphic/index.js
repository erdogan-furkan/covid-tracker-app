import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  selectData,
  selectIsLoading,
  selectError,
} from "../../redux/covid/covidSlice";
import Spinner from "../Spinner";

function Graphic() {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: data && `Current state in ${data.country || "Global"}`,
      },
    },
  };

  const editedData = {
    labels: ["Infected", "Recovered", "Deaths", "Active"],
    datasets: [
      {
        label: "Total",
        data: data && [
          data.confirmed.value,
          data.recovered.value,
          data.deaths.value,
          data.active,
        ],
        backgroundColor: ["#6B7280", "#4B5563", "#374151", "#1F2937"],
      },
    ],
  };

  return (
    <div className="mt-5">
      {isLoading && <Spinner color="fill-gray-600" />}
      {!error && !isLoading && <Bar options={options} data={editedData} />}
    </div>
  );
}

export default Graphic;
