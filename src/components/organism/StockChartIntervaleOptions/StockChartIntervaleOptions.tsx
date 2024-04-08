import { Box } from "@mui/material";
import { useAppSelector } from "../../../hooks/redux";
import DataTimeSection from "../DataTimeSection/DataTimeSection";

import CharOptionSection from "../../molecules/CharOptionSection/CharOptionSection";
import RealTimeSectionOptions from "../RealTimeSectionOptions/RealTimeSectionOptions";
import RadioGroupVariantChart from "../RadioGroupVariantChart/RadioGroupVariantChart";

const StockChartIntervaleOptions = () => {
  const { variant } = useAppSelector(({ chartPage }) => chartPage);
  return (
    <Box display="flex" flexDirection="column" p="1rem" gap="1rem" width="100%">
      <RadioGroupVariantChart variant={variant} />
      <CharOptionSection>
        {variant === "realtime" && <RealTimeSectionOptions />}
        {variant === "datetime" && <DataTimeSection />}
      </CharOptionSection>
    </Box>
  );
};

export default StockChartIntervaleOptions;
