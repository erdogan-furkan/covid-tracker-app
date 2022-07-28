import React from "react";
import { useSelector } from "react-redux";
import {
  selectData,
  selectIsLoading,
  selectError,
} from "../../redux/covid/covidSlice";
import Card from "../Card";
import Spinner from "../Spinner";
import Error from "../Error";

function CardList() {
  const data = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <Spinner color="fill-gray-600" />;
  }

  if (error) {
    return <Error message={"An error has occured: " + error} />;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {data && (
        <>
          <Card
            header="Infected"
            description="Number of infect cases of COVID-19"
            value={data.confirmed.value}
            date={data.lastUpdate}
          />
          <Card
            header="Recovered"
            description="Number of recoveries from COVID-19"
            value={data.recovered.value}
            date={data.lastUpdate}
          />
          <Card
            header="Deaths"
            description="Number of deaths caused by COVID-19"
            value={data.deaths.value}
            date={data.lastUpdate}
          />
          <Card
            header="Active"
            description="Number of active cases of COVID-19"
            value={data.active}
            date={data.lastUpdate}
          />
        </>
      )}
    </div>
  );
}

export default CardList;
