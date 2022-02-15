import React from 'react';
import {
	Box,
	Button,
	Typography,
} from '@mui/material';
import styles from './styles';

const Orders = ({ orders }) => {
	return (
		<Box className='order' sx={styles.orderContainer}>
			{orders.map((order) => (
				<Box sx={styles.orderItem} key={order.number}>
					<Box 
						component='img'
						src={order.imgUrl}
						height='100px'
						width='auto'
					/>
					{order.status === 0 && <Typography variant='overline' sx={{color: 'red'}}>{order.remarks}</Typography>}
					{order.status === 1 && <Typography variant='overline' sx={{color: 'gray'}}>{order.remarks}</Typography>}
					{order.status === 2 && <Typography variant='overline' sx={{color: 'green'}}>{order.remarks}</Typography>}
					<Box>
						<Typography variant='h6'>Order {order.number}</Typography>
						<Button sx={{ fontSize: '0.8rem' }}>
							view product
						</Button>
					</Box>
				</Box>
			))}
		</Box>
	);
}
 
export default Orders;