<div align="center">
  <img src="./assets/dinolog_logo-light.svg" alt="DinoLog logo" width="640" />

<!-- Badges -->
<p>
  <img alt="React" src="https://img.shields.io/badge/React-black?style=plastic&logo=react" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-black?style=plastic&logo=typescript" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-black?style=plastic&logo=css3" />
  <img alt="npm" src="https://img.shields.io/badge/npm-black?style=plastic&logo=npm" />
  <img alt="Git" src="https://img.shields.io/badge/Git-black?style=plastic&logo=git" />

  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-black?style=plastic&logo=node.js" />
  <img alt="Express" src="https://img.shields.io/badge/Express-black?style=plastic&logo=express" />
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-black?style=plastic&logo=mongodb" />
  <img alt="Mongoose" src="https://img.shields.io/badge/Mongoose-black?style=plastic&logo=mongoose" />
  <img alt="Passport" src="https://img.shields.io/badge/Passport-black?style=plastic&logo=passport" />
  <img alt="Multer" src="https://img.shields.io/badge/Multer-black?style=plastic&logo=files" />
  <img alt="Morgan" src="https://img.shields.io/badge/Morgan-black?style=plastic&logo=logstash" />
  <img alt="Dotenv" src="https://img.shields.io/badge/Dotenv-black?style=plastic&logo=dotenv" />
</p>
</div>

---

<em>**A MERN stack interactive paleontological field map.**
<br>Bridging science and curiosity with an immersive digital field journal where fossils regain their place in the world.  
Want to go further? Register to add your own finds and build your personal digital field log.</em>


## 🌍 Project Vision

**DinoLog** is built for researchers, amateur paleontologists, and enthusiasts to explore and record fossil discoveries. Inspired by field notebooks and geological maps, it combines scientific accuracy with archival aesthetics.
<br>It offers an immersive digital field journal where fossils are restored to their geographic context and every site reveals part of Earth’s ancient story.


## 🚀 Features
🌐 **Front‑End**
- 🗺️ **Interactive Map**  
  Discover dinosaur localities with custom markers, expedition‑style textures, and popups showing specimen details.
- 📍 **Add & Edit Discoveries**   
  Floating action button and popup edit controls let logged‑in users add or update fossil records.
- 🔍 **Search & Filter**  
  Client‑side search bar filters fossils by name, species, or description for instant results.
- 👤 **User Authentication Modal**  
  Glass‑style overlay with login/register forms integrated with JWT authentication.
- 🛡️ **Type Safe Data Model**  
  Discovery shape enforced with TypeScript interfaces for predictable rendering and maintainability.
- 📱 **Responsive Design**  
  Layout adapts seamlessly to mobile devices, ensuring the app is usable on phones and tablets.
- 🎨 **Archival Aesthetics**  
  CSS overlays, textures, and expedition‑style theming for immersive UI.

⚙️ **Back-End**
- 🔑 **JWT Authentication with Passport**  
  Secure login/register routes, token‑based session management, and protected endpoints.
- 🗄️ **MongoDB + Mongoose Models**  
  Schema‑based fossil records with validation for coordinates, species, and metadata.
- 📂 **Multer File Uploads**  
  Handles fossil photo uploads, storing images in the uploads/ directory and serving them statically.
- 📜 **RESTful API Routes**  
  ``/api/auth`` for authentication and ``/api/discoveries`` for CRUD fossil operations.
- 📊 **Logging & Middleware**  
  Morgan for request logging, CORS for cross‑origin access, and body‑parser/Express JSON for request handling.
- 🛡️ **Ownership Enforcement**  
  Edit and delete routes restricted to the user who created the discovery.
- ⚡ **Error Handling**  
  Consistent JSON responses with success/error keys for reliable frontend integration.

## 🧪 Technologies Used

### 🌐 Front‑End
- **React** 
- **TypeScript** 
- **CSS** 
- **Leaflet / React‑Leaflet** 
- **React Router** 
- **React‑Toastify** 
- **Context API** 
### ⚙️ Back‑End
- **Node.js + Express** 
- **MongoDB + Mongoose** 
- **Passport (JWT strategy)**
- **Multer** 
- **Morgan**
- **CORS**
- **Dotenv**


## 📁 Project Structure
```bash
assets/
client/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddDiscoveryForm.tsx
│   │   ├── AuthModal.tsx
│   │   ├── EditDiscoveryForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   └── MapSection.tsx
│   ├── context/
│   │   └── AuthContext.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   └── MyFossilsPage.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── App.css
│   └── index.css
config/
models/
routes/
uploads/
server.js
```

## 📚 Data Sources and inspirations

- [Wikipedia](https://www.wikipedia.org)
- [The Paleobiology Database](https://paleobiodb.org/navigator)
- [Ancient Earth Globe](https://dinosaurpictures.org/ancient-earth#170)
- Geological maps, expedition journals, and paleontology field notes


## 🛠️ Installation & Setup
```bash
git clone https://github.com/Do0ky/DinoLog.git 
cd DinoLog
npm install
npm start
```

## 💡 Potential Future Enhancements
- 🧭 Advanced map filters (epoch, formation, location)
- 🦖 Species Page Expansion (connect popup to profiles similar to DinoFinder)
- ♿ Accessibility audit and improvements (including more descriptive ARIA labels for screen readers)
- 🗂️ Enhanced "My Fossils" Page with gallery view, mini‑map of personal discoveries, and quick edit/delete controls


## 👩‍💻 Author
Created by:
- **Claire Peyre**