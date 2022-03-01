const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	cartItem: {
		display: 'flex',
		flexDirection: {xs: 'column', sm: 'row'},
		alignItems: 'center',
		justifyContent: 'space-between',
		outline: '1px solid #BCBCBC',
		gap: '1rem',
		p: '0.8rem',
		color: 'black',
	},
	cartDetails: {
		display: 'flex', 
		flexDirection: {xs: 'column', sm: 'row'},
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '1em', 
		minWidth: {sm: '300px'},
	},
	typographyStyles: {
		display: 'flex', 
		flexDirection: 'column',
		alignItems: {xs: 'center', sm: 'flex-start'},
	},
}

export default styles;