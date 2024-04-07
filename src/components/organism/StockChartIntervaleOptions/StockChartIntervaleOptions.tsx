import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import DataTimeSection from "../DataTimeSection/DataTimeSection";
import { changeVariant } from "../../../redux/slices/chartPage";
import { ChartPageProps } from "../../../redux/slices/chartPage/index.type";
import CharOptionSection from "../../molecules/CharOptionSection/CharOptionSection";
import RealTimeSectionOptions from "../RealTimeSectionOptions/RealTimeSectionOptions";

const StockChartIntervaleOptions = () => {
  const { variant } = useAppSelector(({ chartPage }) => chartPage);
  const dispatch = useAppDispatch();
  return (
    <Box display="flex" flexDirection="column" p="1rem" gap="1rem" width="100%">
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
      <CharOptionSection>
        {variant === "realtime" && <RealTimeSectionOptions />}
        {variant === "datetime" && <DataTimeSection />}
      </CharOptionSection>
    </Box>
  );
};

export default StockChartIntervaleOptions;

/* 
Deberia darme a elegir entre los dos intervalos


*/
