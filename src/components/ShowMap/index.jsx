/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShowMap = ({ country }) => {
  const { latlng } = country;

  return (
    <MapContainer
      center={latlng}
      zoom={6}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={latlng}>
        <Popup>{country.name.common}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ShowMap;
