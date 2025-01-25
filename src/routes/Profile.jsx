import { Button, Typography, Box } from '@mui/material';
import Chat from "../components/Chat";
import List from "../components/List";
import {Link} from "react-router-dom";

function ProfilePage() {
    return (
        <div className="flex h-full">
            <div className="flex-3 overflow-y-auto p-4 space-y-12">
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <Typography variant="h4" className="font-light">
                            User Information
                        </Typography>
                        <Button variant="contained" color="primary">
                            <Link to="/updateprofile" className="hover:text-gray-900">Update Profile</Link>
                        </Button>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Typography>Avatar:</Typography>
                            <img
                                src="https://images.pexels.com/photos/30356380/pexels-photo-30356380/free-photo-of-historic-tower-in-krakow-poland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <Typography>Username:</Typography>
                            <Typography variant="body1" className="font-semibold">
                                John Doe
                            </Typography>
                        </div>
                        <div className="flex items-center gap-4">
                            <Typography>E-mail:</Typography>
                            <Typography variant="body1" className="font-semibold">
                                john@gmail.com
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <Typography variant="h4" className="font-light">
                            My List
                        </Typography>
                        <Button variant="contained" color="secondary">
                            <Link to="/newpost" className="hover:text-gray-900">New Post</Link>
                        </Button>
                    </div>
                    <List />
                </div>

                <div className="space-y-6">
                    <Typography variant="h4" className="font-light">
                        Saved List
                    </Typography>
                    <List />
                </div>
            </div>

            {/*<div className="flex-2 bg-[#fcf5f3] p-4">*/}
                <div className="space-y-6">
                    <Chat />
                </div>
            {/*</div>*/}
        </div>
    );
}

export default ProfilePage;
