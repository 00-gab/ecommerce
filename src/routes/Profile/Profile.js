import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { StyledTab, StyledTabs } from "./customStyles";
import { TabPanel, a11yProps } from './TabPanel';
import Account from './Account';
import CssTextField from './CssTextField';
import Logic from './Logic'
import Orders from './Orders';
import styles from "./styles";

const Profile = () => {
	const {
		edit, 
		orders,
		value,
		onClickCancel,
		onClickEdit,
		handleChange,
	} = Logic();

	return (
		<Box sx={{ minHeight: '100vh' }}>
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
							Edit Username
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
						<Account />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<Orders orders={orders} />
					</TabPanel>
					<TabPanel value={value} index={3}>
						Address Book
					</TabPanel>
					<TabPanel value={value} index={4}>
						Wishlist
					</TabPanel>
				</Box>
			</Box>
		</Box>
	);
}
 
export default Profile;