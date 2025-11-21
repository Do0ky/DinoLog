/* STYLE */
import './AddDiscoveryForm.css';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
/* REACT */
import { useState } from 'react';
import { toast } from 'react-toastify';
/* CONTEXT */
import { useAuth } from '../context/AuthContext';

export default function EditDiscoveryForm({ discovery,
  onClose,
  onSuccess
}: { discovery: any; onClose: () => void; onSuccess: (discovery: any) => void }) {

  const { token } = useAuth();

  const [form, setForm] = useState({
    name: discovery.name || "",
    lat: discovery.coords?.[0]?.toString() || "",
    lng: discovery.coords?.[1]?.toString() || "",
    species: discovery.species || "",
    age: discovery.age || "",
    geologicalUnit: discovery.geologicalUnit || "",
    description: discovery.description || "",
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

      const res = await fetch(`http://localhost:5001/api/discoveries/${discovery._id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: data
    });

      const json = await res.json();
      console.log("Response from API:", json);

      if (json.success) {
        onSuccess(json.discovery);
        toast.success("Discovery updated successfully!");
        onClose();
      } else {
        alert("Failed to update discovery: " + (json.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Request failed. Check console for details.");
    }
  };

  return (
    <div className="add-discovery-form">
      <div className="modal-content">

        <h2>Edit Discovery</h2>

        <form onSubmit={submit}>
            <label>Name *</label>
            <input name="name" value={form.name} required onChange={update} />

          <label>Coordinates *</label>
          <div className="coords">
            <input name="lat" value={form.lat} required onChange={update} />
            <input name="lng" value={form.lng} required onChange={update} />
          </div>

          <label>Genus or Species</label>
          <input name="species" value={form.species} onChange={update} />
          
          <label>Age</label>
          <input name="age" value={form.age} onChange={update} />

          <label>Geological Unit</label>
          <input name="geologicalUnit" value={form.geologicalUnit} onChange={update} />

          <label>Description</label>
          <textarea name="description" value={form.description} onChange={update} />

          <label className="file-upload">
            <span>{photo ? "Photo selected ✔" : "Select a new photo"}</span>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            />
          </label>


          <button type="submit" className="submit-btn">Save Changes</button>
        </form>

        <button className="close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}