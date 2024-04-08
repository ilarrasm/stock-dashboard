import { useGetStockListQuery } from "../stockList";
import { useAppSelector } from "../../../hooks/redux";

const useStockListRequest = () => {
  const { exchange } = useAppSelector(({ chartPage }) => chartPage);
  const response = useGetStockListQuery({ exchange });
  return response;
};

export default useStockListRequest;
