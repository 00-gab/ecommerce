const styles = {
	main: {
		display: 'flex', 
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center', 
		gap: '3em',
		minHeight: '60vh'
	},
	spacing: {
		pt: '3rem',
	},
	productsGrid: {
		display: 'flex', 
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center', 
		width: '80%',
		gap: '1rem',
	},
	categoryBtn: {
		alignSelf: 'flex-end', 
		background: '#1E1D1F', 
		color: 'white' ,
		'&:hover': {
			background: '#393B41',
		}
	},
	products: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '1rem',
		mb: '1.2em',
	},
	product: {
		background: '#FFFFFF',
		width: '300px',
		height: '400px',
		outline: '1px solid #E4E4E4',
		borderRadius: '3px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		pt: '1.2em',
		gap: '1.4rem',
	},
	imgStyles: {
		height: '200px',
		width: 'auto',
	},
	addBtn: {
		background: '#1E1D1F',
		color: 'white' ,
		'&:hover': {
		background: '#393B41',
		}
	},
}

export default styles;