const styles = {
	btnGroup: {
		display: 'flex', 
		justifyContent: 'flex-end',
	},
	confirm: {
		pt: '0.5rem',
	},
	imgContainer: {
		p: '0.8rem'
	},
	mainContainer: {
		display: 'flex', 
		justifyContent: 'center',
		width: { lg: '100%', md: '100%', xs: '500px' }, 
		height: 'auto', 
		p: '1em', 
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
	productContainer: {
		display: 'flex',  
		flexDirection: 'column',
		width: { xs: '100%', sm: '100%', md: '70%', lg: '50%' }, 
		minHeight: "650px", 
		p: '2.5em',
	},
	split: {
		display: 'flex',
		flexDirection: 'column',
		m: '8px 0 8px',
		pt: '1em',
	},
}

export default styles;