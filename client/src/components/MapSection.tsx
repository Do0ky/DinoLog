/* STYLE */
import './MapSection.css';
/* REACT */
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
/* CONTEXT */
import { useAuth } from '../context/AuthContext';
/* COMPONENT */
import AddDiscoveryForm from './AddDiscoveryForm';

type Discovery = {
  _id: string;
  name: string;
  coords: [number, number];
  imageUrl?: string | null;
  species?: string;
  age?: string;
  geologicalUnit?: string;
  description?: string;
};

function MapSection() {
    const { isLoggedIn } = useAuth();
    const [showForm, setShowForm] = useState(false);
    const [discoveries, setDiscoveries] = useState<Discovery[]>([]);
    const [query, setQuery] = useState("");

    // Filter discoveries by name, species, description
    const filtered = discoveries.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        (d.species && d.species.toLowerCase().includes(query.toLowerCase())) ||
        (d.description && d.description.toLowerCase().includes(query.toLowerCase()))
    );

    // Load discoveries from backend
    useEffect(() => {
        fetch("http://localhost:5001/api/discoveries")
            .then(res => res.json())
            .then(data => {
                console.log("Discoveries from API:", data);
                setDiscoveries(data)})
            .catch(err => console.error("Failed to load discoveries", err));
    }, []);

    const addDiscovery = (newItem: Discovery) => {
    setDiscoveries(prev => [...prev, newItem]);
    };

    return (
    <section id="discoveries" className="map-section">

        {/* Map */}
        <MapContainer 
            center={[20, 10]} 
            zoom={2} 
            scrollWheelZoom={false} 
            className="map-container"
        >
           
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> <a href="https://stamen.com/" target="_blank">&copy; Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
            />

            {filtered.map(d => {
                const lat = Number(d.coords[0]);
                const lng = Number(d.coords[1]);
                return (
                    <Marker
                    key={d._id}
                    position={[lat, lng]}
                    icon={L.icon({ iconUrl: '/images/fossil-marker.png', iconSize: [20, 31] })}
                    >
                    <Popup>
                        <div className="popup-content">
                        <h3><em>{d.name}</em></h3>
                        {d.species && <p><strong><em>{d.species}</em></strong></p>}
                        {d.imageUrl && <img src={`http://localhost:5001${d.imageUrl}`} alt={d.name} className="popup-img" />}
                        <p><strong>Coordinates:</strong> {lat}, {lng}</p>
                        {d.age && <p><strong>Age:</strong> {d.age} Mya</p>}
                        {d.geologicalUnit && <p><strong>Geological Unit:</strong> {d.geologicalUnit}</p>}
                        {d.description && <p><strong>Notes:</strong> {d.description}</p>}
                        </div>
                    </Popup>
                    </Marker>
                );
            })}

        </MapContainer>

        {/* Search bar */}
        <div className="map-search">
            <input
                type="text"
                placeholder="Search for fossils..."
                value={query}
                onChange={ e => setQuery(e.target.value) }
            />
        </div>

        {/* Floating action button */}
        {isLoggedIn && (
            <div className="discovery-wrapper" onClick={() => setShowForm(true)}>
                <button className="discovery-button">＋</button>
                <span className="discovery-label">Add Discovery</span>
            </div>
        )}
        {/* Add Discovery Form */}
        {showForm && (
            <AddDiscoveryForm 
            onClose={() => setShowForm(false)} 
            onSuccess={addDiscovery} 
            />
        )}

    </section>
  );
}

export default MapSection;