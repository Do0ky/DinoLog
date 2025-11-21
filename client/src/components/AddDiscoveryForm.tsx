/* STYLE */
import './AddDiscoveryForm.css';
/* REACT */
import { useState } from 'react';
/* CONTEXT */
import { useAuth } from '../context/AuthContext';

export default function AddDiscoveryForm({ onClose, onSuccess } : { onClose: () => void; onSuccess: (discovery: any) => void;}) {

  const { token } = useAuth();

  const [form, setForm] = useState({
    name: "",
    lat: "",
    lng: "",
    species: "",
    age: "",
    geologicalUnit: "",
    description: "",
  });

  const [photo, setPhoto] = useState<File | null>(null);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in form) data.append(key, form[key as keyof typeof form]);
      if (photo) data.append("photo", photo);

      const res = await fetch("http://localhost:5001/api/discoveries", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data
      });

      const json = await res.json();
      console.log("Response from API:", json);

      if (json.success) {
        onSuccess(json.discovery);
        onClose();
      } else {
        alert("Failed to add discovery: " + (json.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Request failed. Check console for details.");
    }
  };

  return (
    <div className="add-discovery-form">
      <div className="modal-content">

        <h2>Add Discovery</h2>

        <form onSubmit={submit}>
          <label>Name *</label>
          <input name="name" placeholder="Great Patagonian Mystery Fossil" required onChange={update} />

          <label>Coordinates *</label>
          <div className="coords">
            <input name="lat" placeholder="Latitude" required onChange={update} />
            <input name="lng" placeholder="Longitude" required onChange={update} />
          </div>

          <label>Genus</label>
          <input name="species" placeholder="Totallynotfakeus" onChange={update} />
          
          <label>Age</label>
          <input name="age" placeholder="Millions of years old (no pressure)" onChange={update} />

          <label>Geological Unit</label>
          <input name="geologicalUnit" placeholder="Name the rocks! They love attention" onChange={update} />

          <label>Description</label>
          <textarea name="description" placeholder="Add notes so future paleontologists won’t curse you" onChange={update} />

          <label className="file-upload">
            <span>Select a photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
          </label>


          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}