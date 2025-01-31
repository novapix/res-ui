import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import PlaceIcon from '@mui/icons-material/Place';

function Map({ items }) {
    return (
        <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className="w-full h-full rounded-xl">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <PlaceIcon item={item} key={item.id} />
            ))}
        </MapContainer>
    );
}

export default Map;
