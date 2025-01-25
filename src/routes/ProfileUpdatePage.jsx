import { Button, TextField, Container, Box, Typography } from "@mui/material";

function ProfileUpdatePage() {
    return (
        <Container maxWidth="lg" className="flex flex-col md:flex-row gap-10">
            <Box className="flex-3 flex items-center justify-center">
                <form className="w-full space-y-6">
                    <Typography variant="h4" fontWeight={300}>
                        Update Profile
                    </Typography>

                    <Box className="space-y-4">
                        <TextField
                            id="username"
                            label="Username"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                        />
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ padding: "15px", fontWeight: "bold" }}
                    >
                        Update
                    </Button>
                </form>
            </Box>

            <Box className="flex-2 bg-[#fcf5f3] flex items-center justify-center">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Avatar"
                    className="w-1/2 rounded-full object-cover"
                />
            </Box>
        </Container>
    );
}

export default ProfileUpdatePage;
