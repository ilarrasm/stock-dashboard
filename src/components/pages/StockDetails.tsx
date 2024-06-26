import { useAppDispatch } from "../../hooks/redux";
import { cleanState } from "../../redux/slices/chartPage";
import isError from "../../services/helper/isError";
import useGetDatatimeRequest from "../../services/stockDetails/hooks/useGetDatatime";
import useGetMetaStockRequest from "../../services/stockDetails/hooks/useGetMetaStock";
import useGetRealTimeRequest from "../../services/stockDetails/hooks/useGetRealTime";
import ErrorScreen from "../molecules/ErrorScreen/ErrorScreen";
import Loading from "../molecules/Loading/Loading";
import StockChartView from "../views/StockChartView/StockChartView";

export const StockDetails = () => {
  const { isLoading: isLoadingMeta } = useGetMetaStockRequest();
  const { isLoading: isLoadingRealtime, data: dataRealtime } =
    useGetRealTimeRequest();
  const { data } = useGetDatatimeRequest();
  const dispatch = useAppDispatch();
  if (isLoadingMeta || isLoadingRealtime) return <Loading />;

  if (
    (dataRealtime && isError(dataRealtime.status)) ||
    (data && isError(data.status))
  ) {
    dispatch(cleanState());
    return <ErrorScreen />;
  }
  return <StockChartView />;
};
