import { useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './copyrights/CopyRights';
import { gridStyle, rightBox, mainTxtStyle, parentBox, submitBtnStyle } from '../style/styles';
import Datepicker from './datePicker/DatePicker';
import { AppContext } from "../context/bondFormContext";
import SelectMarital from './SelectBox/Select';
import CustomInput from './custom-inputs';
import ErrorMessage from './errors/ErrorMessage';
import FloatingImgs from './floating-imgs/FloatingImgs';

const theme = createTheme();

export default function SignInSide() {
    const { formData, setFormData, formErrors, setFormErrors, setCurrentPage } = useContext(AppContext)
    const { name, position, expected_salary, address, phone, email, marital_status, availability_date, date_of_birth } = formErrors;

    const handleSubmit = (event) => {
        event.preventDefault();
        setCurrentPage(2)
    };

    const handleChange = (e, name) => {
        if (e?.target?.value == '') {
            setFormErrors({ ...formErrors, [e.target.name]: `${name} is required` })
        } else {
            setFormErrors({ ...formErrors, [e?.target?.name]: '' })
        }

        if (name == 'expected_salary') {
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
        }
        if (name == 'availability_date' || name == "date_of_birth") {

            if (e == null) {
                setFormErrors({ ...formErrors, [name]: `${name} is required` })
            } else {
                setFormErrors({ ...formErrors, [name]: '' })
            }
            setFormData({ ...formData, [name]: e });
        } else {
            setFormData({ ...formData, [e.target.name]: name == 'expected_salary' ? +e.target.value : e.target.value });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={gridStyle}>
                <CssBaseline />
                <Box sx={parentBox}>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <Box>
                                <Typography component="h1" variant="h5" sx={mainTxtStyle}>Fill Vacancy Form</Typography>
                            </Box>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Grid container columnSpacing={1}>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="name"
                                            name="name"
                                            value={formData.name}
                                            handleChange={handleChange}
                                        />
                                        <ErrorMessage value={name} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="position"
                                            name="position"
                                            value={formData.position}
                                            handleChange={handleChange}
                                        />
                                        <ErrorMessage value={position} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="expected salary"
                                            name="expected_salary"
                                            value={formData.expected_salary}
                                            handleChange={handleChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Datepicker
                                            value={formData.availability_date}
                                            name="availability_date"
                                            handleChange={handleChange}
                                            label="Availability Date"
                                        />
                                        <ErrorMessage value={availability_date} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Datepicker
                                            value={formData.date_of_birth}
                                            name="date_of_birth"
                                            handleChange={handleChange}
                                            label="Date Of Birth"
                                        />
                                        <ErrorMessage value={date_of_birth} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="address"
                                            name="address"
                                            value={formData.address}
                                            handleChange={handleChange}
                                        />
                                        <ErrorMessage value={address} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="phone"
                                            name="phone"
                                            value={formData.phone}
                                            handleChange={handleChange}
                                        />
                                        <ErrorMessage value={phone} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CustomInput
                                            label="email"
                                            name="email"
                                            value={formData.email}
                                            handleChange={handleChange}
                                        />
                                        <ErrorMessage value={email} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectMarital
                                            value={formData.marital_status}
                                            handleChange={(e) => { handleChange(e, e.target.name) }}
                                        />
                                    </Grid>
                                </Grid>

                                <Button
                                    disabled={
                                        Object.keys(formErrors).length == 0
                                        || name !== ''
                                        || position !== ''
                                        || (expected_salary !== '' || formData.expected_salary == 0)
                                        || address !== ''
                                        || phone !== ''
                                        || email !== ''
                                        || marital_status !== ''
                                        || !!(availability_date)
                                        || !!(date_of_birth)
                                    }
                                    type="submit"
                                    variant="contained"
                                    sx={submitBtnStyle}
                                    className="btn-three">
                                    Submit Application
                                </Button>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <Box sx={rightBox} display={{ xs: 'none', md: 'block' }}>
                                <img src="https://digitalbondmena.com/assets/images/logo/logo.webp" />
                                <Typography variant='h3' sx={{ color: '#FFF', my: 3 }}>
                                    Apply For Vacancy
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: '#FFF', my: 3, fontWeight: 400 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa, sapiente ratione laboriosam nam hic, praesentium earum maiores impedit repudiandae veniam perspiciatis error? Ipsum obcaecati illo
                                </Typography>
                                <FloatingImgs />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid >

        </ThemeProvider >
    );
}