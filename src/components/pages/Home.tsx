import useStockListRequest from "../../services/stockList/hooks/useStockListRequest";
import Loading from "../molecules/Loading/Loading";
import ListStockView from "../views/ListStockView/ListStockView";

const Home = () => {
  const { data, isLoading } = useStockListRequest();
  if (isLoading) return <Loading />;
  return !!data && <ListStockView data={data} />;
};

export default Home;
