import React, { useState } from 'react';
import { TextField, Button, Typography, Snackbar } from '@mui/material';
import { useLocalStorage } from 'react-use';

const ContactForm = () => {
    const [storedData, setStoredData] = useLocalStorage('contactForm', null);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.fullName) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Email must be valid';
            isValid = false;
        }

        if (!formData.message) {
            newErrors.message = 'Message cannot be empty';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setStoredData(formData);

            setSnackbarMessage('Form submitted successfully!');
            setOpenSnackbar(true);

            setFormData({ fullName: '', email: '', message: '' });
            setErrors({ fullName: '', email: '', message: '' });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <Typography variant="h4" className="text-center mb-6">
                    Contact Us
                </Typography>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            fullWidth
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            fullWidth
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <TextField
                            label="Your Message"
                            variant="outlined"
                            fullWidth
                            required
                            multiline
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            className="rounded-lg"
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-4"
                    >
                        Submit
                    </Button>
                </form>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={() => setOpenSnackbar(false)}
                    message={snackbarMessage}
                />
            </div>
        </div>
    );
};

export default ContactForm;
