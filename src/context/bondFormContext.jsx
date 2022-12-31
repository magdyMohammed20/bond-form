import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        expected_salary: '',
        availability_date: new Date(),
        date_of_birth: new Date(),
        address: '',
        phone: '',
        email: '',
        marital_status: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [currentPage, setCurrentPage] = useState(1);

    const formValues = { formData, setFormData, formErrors, setFormErrors, currentPage, setCurrentPage };

    return <AppContext.Provider value={formValues}>{children}</AppContext.Provider>;
};

export default AppProvider;
