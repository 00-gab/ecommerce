const styles = {
	box: {
		display: 'flex', 
		justifyContent: 'center', 
		p: '1em',
	},
	formContainer: {
		width: '100%', 
		display: 'flex',
		flexDirection: 'column', 
		justifyContent: 'center',
		gap: '1em',
	},
	mainContainer: {
		width: {xs: '100%', sm: '100%', md: '60%', lg: '50%'},
		height: 'auto', 
		p: '1em',
	},
	snackbarPosition: {
		vertical: "bottom", 
		horizontal: "right"	,
	},
	submitBtn: {
		fontSize: '1.125rem',
		p: '0.5rem',
		m: '8px 0',
	},
}

export default styles;