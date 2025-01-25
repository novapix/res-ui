import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="flex h-full">
            <div className="flex-3 flex items-center justify-center p-6">
                <form className="flex flex-col gap-6 w-full max-w-sm">
                    <Typography variant="h4" className="text-center font-light">
                        Create an Account
                    </Typography>

                    <TextField
                        label="Username"
                        name="username"
                        type="text"
                        fullWidth
                        variant="outlined"
                        required
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        required
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        required
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="py-3 mt-4"
                    >
                        Register
                    </Button>

                    <Link to="/login" className="text-center text-gray-500 text-sm mt-4 hover:underline">
                        Do you have an account?
                    </Link>
                </form>
            </div>

            {/* Image Container */}
            <div className="flex-2 bg-[#fcf5f3] flex justify-center items-center p-6">
                <img src="/bg.png" alt="Background" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default Register;
