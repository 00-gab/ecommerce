import React from 'react';
import PropTypes from 'prop-types';
import { Box }	from '@mui/material';

export const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
    	>
			{value === index && (
				<Box 
					sx={{ 
					diplay: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: '1rem',
					}}
				>
					{children}
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export const a11yProps = (index) => {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
}
 