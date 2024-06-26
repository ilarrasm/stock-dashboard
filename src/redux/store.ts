import { Middleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import chartPageReducer from "./slices/chartPage";
import { stockDetailsApi } from "../services/stockDetails/stockDetails.service";
import { stockListApi } from "../services/stockList/stockList";

const middlewares: Middleware[] = [
  stockDetailsApi.middleware,
  stockListApi.middleware,
];
const reducer = combineReducers({
  chartPage: chartPageReducer,
  [stockDetailsApi.reducerPath]: stockDetailsApi.reducer,
  [stockListApi.reducerPath]: stockListApi.reducer,
});

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(middlewares),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
