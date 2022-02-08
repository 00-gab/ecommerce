const styles = {
	productContainer: {
		display: 'flex',
		flexDirection: 'column',
		maxWidth: 345,
		minWidth: '330px',
		height: 'auto',
		p: '0.5rem',
		gap: '10px'
	},
	productDetails: {
		fontSize: '1.55rem'
	},
	btnGroup: {
		display: 'flex',
		flexDirection: 'column',
		m: '10px 0 8px',
		gap: '8px',
	},
	spacing: {
		mb: '8px',
	},
	mainContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '2rem',
		width: '100%',
		p: '1rem',
		alignItems: 'center'
	},
	imgStyle: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	head: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		p: '0 0.5rem',
	},
}

export default styles;