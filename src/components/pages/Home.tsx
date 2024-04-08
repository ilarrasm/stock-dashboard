import useStockListRequest from "../../services/stockList/hooks/useStockListRequest";
import ListStockView from "../views/ListStockView/ListStockView";

const Home = () => {
  const { data } = useStockListRequest();
  if (!data) return null;
  return <ListStockView data={data} />;
};

export default Home;
