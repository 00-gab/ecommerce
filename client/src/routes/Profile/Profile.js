import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { StyledTab, StyledTabs } from "./customStyles";
import { TabPanel, a11yProps } from './TabPanel';
import Account from './Account';
import AddressBook from './Address/AddressBook';
import Cart from './Cart/Cart';
import CssTextField from './CssTextField';
import Logic from './Logic'
import Orders from './Orders';
import styles from "./styles";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51KWVMmHn8cxbBtzO7lgfmdAjVBaN3xOU4YVt78cDIXFTo1dMunjM78x6gcIGYWZ5mqB0oZjhFl2h3qNQsNZLz26K00EH1IxUvp")

const Profile = ({ userObj, authService }) => {
	const {
		cartObject,
		edit, 
		loading,
		orders,
		value,
		username,
		onChangeUsername,
		onClickCancel,
		onClickEdit,
		handleChange,
		onSubmitUsername,
	} = Logic(userObj.id, authService.currentUser);
	
	return (
		<Box sx={{ minHeight: '100vh' }}>
			<Box className='header' sx={styles.header}>
				<Box className='split' sx={styles.split}>
					{edit ? 
						<Box component="form" onSubmit={onSubmitUsername} sx={styles.split}>
							<CssTextField 
								value={username}
								onChange={onChangeUsername}
								label="Enter Username" 
								id="custom-textfield" 
								sx={styles.editInput}
							/>
							<Box sx={{ display: 'flex', gap: '1em' }}>
								<Button 
									disabled={loading}
									type='submit'
									variant='outlined' 
									color='inherit' 
									sx={styles.editBtn}
								>
								Update
								</Button>
								<Button
									disabled={loading}			
									variant='outlined' 
									color='inherit' 
									onClick={onClickCancel}
									sx={styles.editBtn}
								>
								Cancel
								</Button>
							</Box>
						</Box>
						:
						<>
						<Typography variant="h2" align="center">{username}</Typography>
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
							{/* <StyledTab label="Profile" {...a11yProps(1)} /> */}
							<StyledTab label="Orders" {...a11yProps(1)} />
							<StyledTab label="Address Book" {...a11yProps(2)} />
							<StyledTab label="Wishlist" {...a11yProps(3)} />
						</StyledTabs>
					</Box>
					<TabPanel value={value} index={0}>
						<Elements stripe={stripePromise}>
							<Cart cartObject={cartObject} userObj={userObj} />
						</Elements>
					</TabPanel>
					{/* <TabPanel value={value} index={1}>
						<Account />
					</TabPanel> */}
					<TabPanel value={value} index={1}>
						<Orders orders={orders} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<AddressBook userObj={userObj} />
					</TabPanel>
					<TabPanel value={value} index={3}>
						Wishlist
					</TabPanel>
				</Box>
			</Box>
		</Box>
	);
}
 
export default Profile;