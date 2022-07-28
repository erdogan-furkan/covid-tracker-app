import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchCovidData } from "../../redux/covid/covidSlice";

function Form() {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios(
        `${process.env.REACT_APP_API_BASE_ENDPOINT}/countries/`
      );

      setCountries(data.countries);
    })();
  }, []);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  return (
    <div>
      <hr className="border-gray-400 my-3" />
      <select
        className="w-full bg-gray-600 text-white rounded p-5 appearance-none focus:bg-gray-500 transition duration-700"
        onChange={(e) => dispatch(fetchCovidData(e.target.value))}
      >
        <option value="">Global</option>
        {countries &&
          countries.map((country, key) => (
            <option key={key} value={country.name}>
              {country.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Form;
