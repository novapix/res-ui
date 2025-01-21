import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";
import PlaceIcon from '@mui/icons-material/Place';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';

function Card({ item }) {
    return (
        <div className="flex flex-col md:flex-row gap-5">
            <Link to={`/${item.id}`} className="flex-2 h-52 md:hidden">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </Link>

            <div className="flex-3 flex flex-col justify-between gap-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700 transition-all duration-400 ease-in-out hover:text-black hover:scale-105">
                    <Link to={`/${item.id}`}>{item.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm flex items-center gap-2 text-gray-500">
                    <PlaceIcon className="w-4 h-4"/>
                    <span>{item.address}</span>
                </p>

                <p className="text-base sm:text-lg font-light p-2 rounded-md bg-yellow-200 inline-block">
                    ${item.price}
                </p>

                <div className="flex justify-between gap-2">
                    <div className="flex gap-5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                            <BedIcon className="w-4 h-4"/>
                            <span>{item.bedroom} Bedroom</span>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-md">
                            <BathtubIcon className="w-4 h-4"/>
                            <span>{item.bathroom} Bathroom</span>
                        </div>
                    </div>

                    <div className="flex gap-3 sm:gap-5">
                        <IconButton className="border border-gray-400 p-1.5 rounded-md hover:bg-gray-200">
                            <FavoriteBorder className="w-4 h-4"/>
                        </IconButton>

                        <IconButton className="border border-gray-400 p-1.5 rounded-md hover:bg-gray-200">
                            <ChatBubbleOutline className="w-4 h-4"/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        bedroom: PropTypes.number.isRequired,
        bathroom: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
