const styles = {
	nav: {
		display: 'flex', 
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		p: '1em',
	},
	headerContainer: {
		display: 'flex', 
		flexDirection: 'column',
		color: 'white',
		height: { md: '25em', sm: '30em', xs: '40em' },
		width: '100%',
		background: '#1E1D1F',
	},
	headerContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '40%',
		m: '0 auto',
		mt: '5em',
		gap: 3,
	},
	actionButton: {
		display: 'flex', 
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: 1,
	},
	typographySpacing: {
		letterSpacing: '10px'
	},
	quoteSection: {
		height: { md: '20%', sm: '20%', xs: '20%' },
		width: { md: '50%', sm: '90%', xs: '90%' },
		m: '0 auto',
		color: '#1E1D1F',
		p: '5em 0',
	},
	imgSection: {
		width: '80%',
		height: '470px',
		m: '0 auto',
	},
	imgStyles: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 3,
	},
	productsContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flexWrap: 'wrap',
		gap: '1.5rem'
	},
	productStyles: {
		display: 'flex',
		flexDirection: 'column',
		height: 'auto',
		maxWidth: 345,
		padding: '1rem',
		gap: '1rem'
	},
	productContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '2rem'
	},
	productHeading: {
		mb: '1rem'
	},
	productImageContainer: {
		width: '250px',
		height: '250px',
	},
	productSection: {
		pt: '2em', 
		width: '80%', 
		alignSelf: 'center', 
	},
	detailContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	footer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '15em',
		background: '#393B41',
		color: '#FCEAFF'
	},
	footerContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '8px'
	},
}

export default styles;