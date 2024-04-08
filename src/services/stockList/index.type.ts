import { Stock } from "../../types/stock";

interface PaginateTable {
  totalPages: number;
  data: Stock[][];
}

export default interface StockListWithPagination {
  dataAutocomplete: Stock[];
  paginateTable: PaginateTable;
}
