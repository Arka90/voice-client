import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Apple</Typography>
        <Typography color={main}>apple.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed,
        developed, and marketed by Apple Inc. They are the sixteenth-generation
        flagship iPhones, succeeding the iPhone 13 Pro and iPhone 13 Pro Max.
        The devices were unveiled alongside the iPhone 14
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
