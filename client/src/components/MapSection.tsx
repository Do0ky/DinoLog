/* STYLE */
import './MapSection.css';
/* REACT */
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from "leaflet";
/* CONTEXT */
import { useAuth } from '../context/AuthContext';
/* COMPONENT */
import AddDiscoveryForm from './AddDiscoveryForm';

type Fossil = {
  id: String;
  name: string;
  image: string;
  coords: [number, number];
};
const sampleFossils: Fossil[] = [
  { id: 1, name: 'Eoraptor', image: '/images/eoraptor.jpg', coords: [-30.7, -67.8] },
  { id: 2, name: 'Massospondylus', image: '/images/massospondylus.jpg', coords: [-28.96, 27.43] },
  { id: 3, name: 'Spicomellus', image: '/images/spicomellus.jpg', coords: [33.3, -4.8] },
  { id: 4, name: 'Archaeopteryx', image: '/images/archaeopteryx.jpg', coords: [48.9, 11.2] },
  { id: 5, name: 'Microraptor', image: '/images/archaeopteryx.jpg', coords: [41.2, 119.4] },
  { id: 6, name: 'Spinosaurus', image: '/images/spinosaurus.jpg', coords: [28.12, 29.04] },
  { id: 7, name: 'Velociraptor', image: '/images/velociraptor.jpg', coords: [44.08, 103.43] },
  { id: 8, name: 'Tyrannosaurus', image: '/images/tyrannosaurus.jpg', coords: [46.92, -107.73] },
];

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
    const [discoveries, setDiscoveries] = useState(sampleFossils);

  const addDiscovery = (newItem: Discovery) => {
  setDiscoveries((prev) => [...prev,
    {id: newItem._id,
      name: newItem.name,
      coords: newItem.coords,
      image: newItem.imageUrl || undefined,
      species: newItem.species,
      age: newItem.age,
      geologicalUnit: newItem.geologicalUnit,
      notes: newItem.description,
    }
  ]);
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

            {sampleFossils.map(fossil => (
            <Marker 
                key={fossil.id} 
                position={fossil.coords} 
                icon={L.icon({ iconUrl: '/images/fossil-marker.png', iconSize: [20, 31] })}
            >
                <Popup>
                <div className="popup-content">
                    <h3><em>{fossil.name}</em></h3>
                    <img src={fossil.image} alt={fossil.name} className="popup-img" />
                    <p>Coordinates: {fossil.coords[0]}, {fossil.coords[1]}</p>
                </div>
                </Popup>
            </Marker>
            ))}

        </MapContainer>

        {/* Search bar */}
        <div className="map-search">
            <input type="text" placeholder="Search for fossils..." />
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