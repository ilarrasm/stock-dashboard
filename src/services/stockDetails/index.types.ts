import OptionStock from "../../types/optionStock";
import { Stock } from "../../types/stock";

export interface StockDetailsQuery {
  meta: Stock;
  values: OptionStock[];
  status: "ok" | "error";
  code?: 400 | 404 | 429;
  message?: string;
}
