import React  from "react";
import { Box, Button } from "@mui/material";
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = ({ urls, activeStep, maxSteps, handleNext, handleBack, handleStepChange }) => {
	const theme = useTheme();

	return (
		<>
			<Box sx={{ minWidth: "100%", flexGrow: 1 }}>
				<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
      			>
				  {urls.map((step, index) => (
					  <Box sx={{ display: 'flex', justifyContent: 'center' }} key={step}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
							component="img"
							src={step}
							sx={{
							width: "300px",
							height: "auto",
							overflow: 'hidden',
							}}
							/>
						) : null }
					  </Box>
				  ))}
				</AutoPlaySwipeableViews>
				<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
					size="small"
					onClick={handleNext}
					disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
						<KeyboardArrowLeft />
						) : (
						<KeyboardArrowRight />
						)}
					</Button>
					}
					backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
						<KeyboardArrowRight />
						) : (
						<KeyboardArrowLeft />
						)}
						Back
					</Button>
					}
				/>
			</Box>
		</>
	);
}
 
export default Carousel;