import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CustomTextField = styled(TextField)({
    color: '#FFF',
    caretColor: '#111',
    '& label': {
        color: '#222'
    },
    '& label.Mui-focused': {
        color: '#d3d3d3',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#d3d3d3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#d3d3d3',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            transition: 'all .2s ease',
            borderColor: '#d3d3d3'
        }
    },
});

export default CustomTextField