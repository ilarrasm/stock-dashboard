import paginate from "../../../helpers/paginate";
import { Stock } from "../../../types/stock";
import StockListWithPagination from "../index.type";

const stockListAdapter = ({ data }: { data: Stock[] }): StockListWithPagination => {
  const paginateTable = paginate(data, 20);
  return { dataAutocomplete: data, paginateTable };
};
export default stockListAdapter;



