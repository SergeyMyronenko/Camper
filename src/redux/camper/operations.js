import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b33f277fba54a5b7ec1d76.mockapi.io/api";

export const getAllCamp = createAsyncThunk(
  "camper/getAllCamp",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/catalog");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentCamp = createAsyncThunk(
  "camper/currentCamp",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get("/catalog");

      const currentCamp = response.data.find((item) => item._id === id);

      if (!currentCamp) {
        return;
      }

      return currentCamp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
