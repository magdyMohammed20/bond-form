import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CustomTextField from '../custom-inputs/CustomTextField';
import { DatePicker as Picker } from '@mui/x-date-pickers/DatePicker';

function Datepicker({ value, handleChange, label, name }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Picker
                renderInput={(props) => <CustomTextField
                    margin="normal"
                    fullWidth
                    {...props}
                    name={name}
                />}
                label={label}
                value={value}
                name="availability_date"
                onChange={(e) => handleChange(e, name)}
            />
        </LocalizationProvider>
    )
}

export default Datepicker