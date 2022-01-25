import React from "react";
import { Modal, Paper } from "@mui/material";

const ProductModal = ({ 
	ModalContent, 
	modalOpen, 
	setModalOpen, 
	edit,
	onModalClose,
	id,
	currName,
	currPrice,
	currStocks,
	currImg,
}) => {
	return (
		<Modal
		open={modalOpen}
		onClose={onModalClose}
		aria-labelledby={id}
		>
			<Paper id={id} elevate={3} sx={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			bgcolor: 'background.paper',
			width: { xs: '100%', sm: '80%', md: '50%',  }, 
			height: { sx: '50%' },
			boxShadow: 24,
			p: 3,
			display: 'flex',
			outline: 0,
			}}
			>
				{edit ? (
					<ModalContent
					id={id}
					currName={currName}
					currPrice={currPrice}
					currStocks={currStocks}
					currImg={currImg}
					/>
				) :
				(
					<ModalContent setModalOpen={setModalOpen} />
				)
				}
			</Paper>
			</Modal>
	);
}
 
export default ProductModal;