import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	Button,
	styled,
	Typography,
	Tab,
	Tabs,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ShopNav from '../../components/ShopNav/ShopNav';
import CssTextField from './CssTextField';
import styles from "./styles";
import { TabPanel, a11yProps } from './TabPanel';

const StyledTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		backgroundColor: '#232224',
	},
})

const StyledTab = styled(props => <Tab disableRipple {...props} />)(({theme}) => ({
	color: '#777777',
	'&.Mui-selected': {
		color: '#232224',
		fontWeight: theme.typography.fontWeightMedium,
	},
	'&:hover': {
		color: '#232224',
		opacity: 1,
	},
}))


const Profile = () => {
	const [edit, setEdit] = useState(false);

	const onClickEdit = () => setEdit(true);

	const onClickCancel = () => setEdit(false);

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	const orders = [
		{
			number: '245987',
			status: 1,
			remarks: 'In Progress',
		},
		{
			number: '532282',
			status: 2,
			remarks: 'Delivered',
		},
		{
			number: '328656',
			status: 0,
			remarks: 'Cancelled',
		},
	];

	return (
		<>
			<ShopNav />
			<Box className='header' sx={styles.header}>
				<Box className='split' sx={styles.split}>
					{edit ? 
						<>
						<CssTextField label="Enter Username" id="custom-css-outlined-input" sx={styles.editInput} />
						<Box sx={{ display: 'flex', gap: '1em' }}>
							<Button 
								variant='outlined' 
								color='inherit' 
								onClick={onClickCancel}
								sx={styles.editBtn}
							>
							Update
							</Button>
							<Button 
								variant='outlined' 
								color='inherit' 
								onClick={onClickCancel}
								sx={styles.editBtn}
							>
							Cancel
							</Button>
						</Box>
						</>
						:
						<>
						<Typography variant="h2" align="center">Song Yuqi</Typography>
						<Box>
							<Button 
								variant='outlined' 
								color='inherit' 
								onClick={onClickEdit}
								sx={styles.editBtn}
							>
							Edit Profile
							</Button>
						</Box>
						</>
					}
				</Box>
			</Box>
			<Box className='main' sx={styles.main}>
			<Box sx={{ width: '100%' }}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<StyledTabs
						value={value}
						onChange={handleChange} 
						aria-label="tabs"
						variant="scrollable"
						scrollButtons="auto"
					>
						<StyledTab label="Cart" {...a11yProps(0)} />
						<StyledTab label="Profile" {...a11yProps(1)} />
						<StyledTab label="Orders" {...a11yProps(2)} />
						<StyledTab label="Address Book" {...a11yProps(3)} />
						<StyledTab label="Wishlist" {...a11yProps(4)} />
					</StyledTabs>
				</Box>
				<TabPanel value={value} index={0}>
					Cart
				</TabPanel>
				<TabPanel value={value} index={1}>
					Profile
				</TabPanel>
				<TabPanel value={value} index={2}>
					Orders
				</TabPanel>
				<TabPanel value={value} index={3}>
					Address Book
				</TabPanel>
				<TabPanel value={value} index={4}>
					Wishlist
				</TabPanel>
				</Box>
			</Box>
		</>
	);
}
 
export default Profile;