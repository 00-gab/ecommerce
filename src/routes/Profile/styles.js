const styles = {
	header: {
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center', 
		background: '#232224', 
		borderTop: '1px solid #393B41', 
		height: 'auto', 
		p: '3em',
		mb: '3em'
	},
	split: {
		display: 'flex', 
		flexDirection: { xs: 'column', sm: 'row' },
		justifyContent: { xs: 'center', sm: 'space-between' }, 
		color: 'white', 
		width: '100%', 
		alignItems: { xs: 'center', sm: 'space-between' },
		p: '1em',
		gap: '1em'
	},
	editBtn: {
		borderRadius: '1px', 
		p: '0.8em',
	},
	editInput: {
		input: { color: 'white' }, 
		label: { color: "white" },
		minWidth: '300px',
		width: '35%'
	},
	main: {
		display: 'flex', 
		justifyContent: 'center', 
		gap: '2rem', 
		p: '0 4em',
	},
}

export default styles;