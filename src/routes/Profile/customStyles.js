import { styled, Tab, Tabs } from "@mui/material";

export const StyledTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		backgroundColor: '#232224',
	},
})

export const StyledTab = styled(props => <Tab disableRipple {...props} />)(({theme}) => ({
	color: '#777777',
	'&.Mui-selected': {
		color: '#232224',
		fontWeight: theme.typography.fontWeightMedium,
	},
	'&:hover': {
		color: '#232224',
		opacity: 1,
	},
}))