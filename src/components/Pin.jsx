import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Pin({ item }) {
    return (
        <Marker position={[item.latitude, item.longitude]}>
            <Popup>
                <Box display="flex" gap={2}>
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-16 h-12 object-cover rounded-md"
                    />
                    <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Link to={`/${item.id}`} className="text-blue-500 font-semibold hover:underline">
                            {item.title}
                        </Link>
                        <Typography variant="body2">{item.bedroom} bedroom</Typography>
                        <Typography variant="body2" fontWeight="bold">
                            ${item.price}
                        </Typography>
                    </Box>
                </Box>
            </Popup>
        </Marker>
    );
}

export default Pin;
