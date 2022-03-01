const styles = {
	mainContainer: {
		display: 'flex', 
		justifyContent: 'center', 
		p: '1em',
	},
	productContainer: {
		width: {xs: '100%', sm: '100%', md: '60%', lg: '50%'}, 
		height: 'auto', 
		p: '1em',
	},
	formContainer: {
		width: '100%', 
		display: 'flex',
		flexDirection: 'column', 
		justifyContent: 'center',
		gap: '0.8rem',
	},
	error: {
		color: '#D42F2F',
	},
	submitBtn: {
		p: '0.5rem', 
		fontSize: '1.125rem', 
		m: '8px 0',
	},
}

export default styles;