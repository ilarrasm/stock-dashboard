import { ChartPageProps } from "../../../redux/slices/chartPage/index.type";
import { changeVariant } from "../../../redux/slices/chartPage";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useAppDispatch } from "../../../hooks/redux";

const RadioGroupVariantChart = ({
  variant,
}: {
  variant: ChartPageProps["variant"];
}) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <RadioGroup
        value={variant}
        onChange={(_e, newValue) => {
          dispatch(
            changeVariant({ variant: newValue as ChartPageProps["variant"] })
          );
        }}
      >
        <FormControlLabel
          value="realtime"
          control={<Radio />}
          label="Cotización en tiempo real"
        />
        <FormControlLabel
          value="datetime"
          control={<Radio />}
          label="Cotización historica"
        />
      </RadioGroup>
    </div>
  );
};

export default RadioGroupVariantChart;
