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

    const data = new FormData();
    for (const key in form) data.append(key, form[key as keyof typeof form]);
    if (photo) data.append("photo", photo);

    const res = await fetch("/api/discoveries", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data
    });

    const json = await res.json();
    if (json.success) {
      onSuccess(json.discovery);
      onClose();
    }
  };

  return (
    <div className="add-discovery-form">
      <div className="modal-content">

        <h2>Add Discovery</h2>

        <form onSubmit={submit}>
          <label>Name</label>
          <input name="name" required onChange={update} />

          <label>Coordinates</label>
          <div className="coords">
            <input name="lat" placeholder="Latitude" onChange={update} />
            <input name="lng" placeholder="Longitude" onChange={update} />
          </div>

          <label>Species (optional)</label>
          <input name="species" onChange={update} />
          
          <label>Age (optional)</label>
          <input name="age" onChange={update} />

          <label>Geological Unit (optional)</label>
          <input name="geologicalUnit" onChange={update} />

          <label>Description</label>
          <textarea name="description" onChange={update} />

          <label>Photo upload</label>
          <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files?.[0] || null)} />

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}