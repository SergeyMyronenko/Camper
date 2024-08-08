import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./camper/slice.js";

export const store = configureStore({ reducer: { camper: camperReducer } });
