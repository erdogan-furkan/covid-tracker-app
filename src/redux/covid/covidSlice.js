import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCovidData = createAsyncThunk(
  "covid/fetchCovidData",
  async (country) => {
    if (!country || country === "") {
      const { data } = await axios(process.env.REACT_APP_API_BASE_ENDPOINT);
      const active = data.confirmed.value - data.deaths.value;
      return { ...data, active };
    }

    const { data } = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/countries/${country}`
    );
    const active = data.confirmed.value - data.deaths.value;
    return { ...data, active, country };
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: null,
    isLoading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    // Covid datas
    [fetchCovidData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchCovidData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchCovidData.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export const selectData = (state) => state.covid.data;
export const selectIsLoading = (state) => state.covid.isLoading;
export const selectError = (state) => state.covid.error;

export default covidSlice.reducer;
