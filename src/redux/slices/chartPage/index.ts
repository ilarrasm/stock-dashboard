import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { ChartPageProps } from "./index.type";

const chartPageSlice = createSlice({
  name: "chartPage",
  initialState,
  reducers: {
    changeVariant: (
      state,
      { payload: { variant } }: PayloadAction<Pick<ChartPageProps, "variant">>
    ) => ({
      ...state,
      variant,
    }),
    changeInterval: (
      state,
      { payload: { interval } }: PayloadAction<Pick<ChartPageProps, "interval">>
    ) => ({ ...state, interval }),
    changeDates: (
      state,
      {
        payload: { startDate, endDate },
      }: PayloadAction<Pick<ChartPageProps, "startDate" | "endDate">>
    ) => ({ ...state, variantView: "datetime", startDate, endDate }),
  },
});

export const { changeVariant, changeInterval, changeDates } =
  chartPageSlice.actions;

export default chartPageSlice.reducer;
