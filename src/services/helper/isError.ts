import { StockDetailsQuery } from "../stockDetails/index.types";

const isError = (status: StockDetailsQuery["status"]) => {
  return status === "error";
};

export default isError;
