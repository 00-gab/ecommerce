const styles = {
	mainContainer: {
		height: '100vh',
		width: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#393B41',
	},
	formContainer: {
		p: '1.2em',
		height: 'auto',
		minWidth: '260px',
		width: {xs: '90%', sm: '450px'},
		display: 'flex',
		flexDirection: 'column',
		gap: '1em',
	},
	signUpBtn: {
		color: 'orange'
	},
	submitBtn: {
		background: '#515C67',
		'&:hover': {
			background: '#393B41',
		}
	},
	error: {
		color: '#D42F2F',
	},
}

export default styles;