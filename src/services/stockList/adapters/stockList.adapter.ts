import paginate from "../../../helpers/paginate";
import { Stock } from "../../../types/stock";

const stockListAdapter = ({ data }: { data: Stock[] }) => {
  const paginateTable = paginate(data, 20);
  return { dataAutocomplete: data, paginateTable };
};
export default stockListAdapter;
