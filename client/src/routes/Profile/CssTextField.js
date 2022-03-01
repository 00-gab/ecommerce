import { TextField } from "@mui/material";
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
	  color: 'white',
	},
	'& .MuiInput-underline:after': {
	  borderBottomColor: 'white',
	},
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: 'white',
	  },
	  '&:hover fieldset': {
		borderColor: 'white',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: 'white',
	  },
	},
});

export default CssTextField;