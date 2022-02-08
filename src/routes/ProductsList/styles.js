const styles = {
	btnGroup: {
		display: 'flex', 
		justifyContent: 'flex-end',
	},
	tableContainer: {
		minWidth: "650px",
	},
	modalStyle: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		height: 140,
		width: 350,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 1,
		outline: 0,
	},
	confirm: {
		pt: '0.5rem',
	},
	tableContent: {
		'&:last-child td, &:last-child th': { border: 0 },
	},
}

export default styles;