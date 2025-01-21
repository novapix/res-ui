import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

function Login() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Welcome back
                </Typography>
                <form className="space-y-4">
                    <TextField
                        fullWidth
                        name="username"
                        label="Username"
                        variant="outlined"
                        required
                        autoFocus
                    />
                    <TextField
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            py: 2,
                            mt: 2,
                        }}
                    >
                        Login
                    </Button>
                </form>
                <Link
                    to="/register"
                    className="text-sm text-gray-500 hover:text-gray-700 mt-4"
                >
                    {"Don't"} you have an account?
                </Link>
            </Box>
        </Container>
    );
}

export default Login;
