import { MenuItem, Select } from "@mui/material";
import { ChartPageProps } from "../../../redux/slices/chartPage/index.type";

const RealTimeSelect = ({
  interval,
  callback,
}: {
  interval: string;
  callback: (interval: ChartPageProps["interval"]) => void;
}) => {
  return (
    <>
      <Select
        value={interval}
        onChange={(event) =>
          callback(event.target.value as ChartPageProps["interval"])
        }
      >
        <MenuItem value={"1min"}>1 min.</MenuItem>
        <MenuItem value={"5min"}>5 min.</MenuItem>
        <MenuItem value={"15min"}>15 min.</MenuItem>
      </Select>
    </>
  );
};

export default RealTimeSelect;
