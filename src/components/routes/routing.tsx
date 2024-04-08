import { Routes, Route } from "react-router-dom";
import { StockDetails } from "../pages/StockDetails";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/stock/:symbol" element={<StockDetails />} />
    </Routes>
  );
};

export default Routing;
