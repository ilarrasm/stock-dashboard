import { useParams } from "react-router-dom";
import { useGetMetaStockQuery } from "../stockDetails.service";

const useGetMetaStockRequest = () => {
  const { symbol } = useParams();
  const response = useGetMetaStockQuery({ symbol: symbol || "" });
  return { ...response };
};

export default useGetMetaStockRequest;
