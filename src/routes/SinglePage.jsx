import { Button, Typography } from '@mui/material';
import { LocationOn, Pets, AttachMoney, School, BusAlert, Restaurant ,ChatBubbleOutline} from '@mui/icons-material';
import Slider from "../components/Slider";
import Map from "../components/Map";
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { singlePostData, userData } from "../lib/dummydata";

function SinglePage() {
    return (
        <div className="flex flex-col md:flex-row h-full">
            {/* Left Section */}
            <div className="flex-1 md:flex-3 h-full overflow-y-auto md:h-auto md:mb-12 px-4 md:px-12">
                <Slider images={singlePostData.images} />
                <div className="mt-12">
                    <div className="flex justify-between md:flex-col md:gap-5">
                        <div className="flex flex-col gap-5">
                            <Typography variant="h4" fontWeight={400}>
                                {singlePostData.title}
                            </Typography>
                            <div className="flex items-center text-gray-600 text-sm gap-2">
                                <LocationOn className="w-4 h-4 text-gray-500" />
                                <span>{singlePostData.address}</span>
                            </div>
                            <Typography className="px-3 py-2 bg-yellow-200 rounded-lg text-lg font-light">
                                ${singlePostData.price}
                            </Typography>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 p-6 rounded-lg bg-yellow-100 font-semibold">
                            <img
                                src={userData.img}
                                alt={userData.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <span>{userData.name}</span>
                        </div>
                    </div>
                    <div className="mt-12 text-gray-700 text-base leading-6">
                        {singlePostData.description}
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 md:flex-2 bg-[#FCF5F3] h-full overflow-y-auto md:h-auto md:mb-12 px-5 py-6">
                <Typography variant="h6" className="font-bold mb-2">General</Typography>
                <div className="flex flex-col gap-5 bg-white p-5 rounded-lg">
                    <div className="flex items-center gap-3">
                        <AttachMoney className="w-6 h-6 text-yellow-600" />
                        <div>
                            <span className="font-bold">Utilities</span>
                            <p className="text-sm">Renter is responsible</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Pets className="w-6 h-6 text-green-600" />
                        <div>
                            <span className="font-bold">Pet Policy</span>
                            <p className="text-sm">Pets Allowed</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <AttachMoney className="w-6 h-6 text-red-600" />
                        <div>
                            <span className="font-bold">Property Fees</span>
                            <p className="text-sm">Must have 3x the rent in total household income</p>
                        </div>
                    </div>
                </div>

                <Typography variant="h6" className="font-bold mt-6 mb-2">Sizes</Typography>
                <div className="flex flex-wrap gap-5">
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-md">
                        <img src="/size.png" alt="size icon" className="w-6 h-6" />
                        <span>80 sqft</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-md">
                        <BedIcon className="w-4 h-4"/>
                        <span>2 beds</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-md">
                        <BathtubIcon className="w-4 h-4"/>
                        <span>1 bathroom</span>
                    </div>
                </div>

                <Typography variant="h6" className="font-bold mt-6 mb-2">Nearby Places</Typography>
                <div className="flex flex-wrap gap-5 bg-white p-5 rounded-lg">
                    <div className="flex items-center gap-3">
                        <School className="w-6 h-6 text-blue-600" />
                        <div>
                            <span className="font-bold">School</span>
                            <p className="text-sm">250m away</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <BusAlert className="w-6 h-6 text-green-600" />
                        <div>
                            <span className="font-bold">Bus Stop</span>
                            <p className="text-sm">100m away</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Restaurant className="w-6 h-6 text-red-600" />
                        <div>
                            <span className="font-bold">Restaurant</span>
                            <p className="text-sm">200m away</p>
                        </div>
                    </div>
                </div>

                <Typography variant="h6" className="font-bold mt-6 mb-2">Location</Typography>
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-6">
                    <Map items={[singlePostData]} />
                </div>

                <div className="flex flex-col md:flex-row gap-5 mt-6">
                    <Button variant="outlined" className="flex items-center gap-2 text-blue-500 w-full md:w-auto">
                        <ChatBubbleOutline className="w-4 h-4"/>
                        Send a Message
                    </Button>
                    <Button variant="outlined" className="flex items-center gap-2 text-yellow-500 w-full md:w-auto">
                        <BookmarkIcon className="w-4 h-4"/>
                        Save the Place
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
