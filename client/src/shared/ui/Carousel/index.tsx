import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { Box, Button, MobileStepper, BoxProps } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface IImage {
  img: string;
  label: string;
}

export interface ICarouselProps extends BoxProps {
  images: IImage[];
}

export function Carousel(props: ICarouselProps) {
  const { images, sx } = props;

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      {...props}
      sx={{
        ...sx,
        position: "relative",
        userSelect: "none",
      }}
    >
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) =>
          Math.abs(activeStep - index) <= 2 ? (
            <div
              style={{
                overflow: "hidden",
                borderRadius: 7,
              }}
            >
              <Box
                component="img"
                sx={{
                  width: sx?.width || "100%",
                  height: sx?.height || "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
                alt={step.label}
                src={step.img}
              />
            </div>
          ) : null
        )}
      </SwipeableViews>

      <Box sx={{ position: "absolute", width: "100%", bottom: 0 }}>
        {images.length > 1 && (
          <MobileStepper
            sx={{ background: "transparent" }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                sx={{
                  background: "#ffffff30",
                  borderRadius: 100,
                  p: 0,
                }}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                sx={{ background: "#ffffff30", borderRadius: 100, p: 0 }}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        )}
      </Box>
    </Box>
  );
}
