<div align="center">
  <img src="./assets/dinolog_logo-light.svg" alt="DinoLog logo" width="640" />

  <!-- Badges -->
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-blue?style=plastic&logo=react&color=61DBFB" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-blue?style=plastic&logo=typescript" />
    <img alt="npm" src="https://img.shields.io/badge/npm-red?style=plastic&logo=npm&color=CB3837" />
    <img alt="CSS3" src="https://img.shields.io/badge/CSS3-blue?style=plastic&logo=css&color=2965f1" />
    <img alt="Git" src="https://img.shields.io/badge/Git-blue?style=plastic&logo=git&color=f14e32" />
  </p>
</div>


<em>A React + TypeScript interactive paleontological field map.
<br>Explore fossil discoveries worldwide and open specimen popups to dive into their details. Want to go further? Register to add your own finds and build your personal digital field log.</em>

---

## 🌍 Project Vision

**DinoLog** is built for researchers, amateur paleontologists, and enthusiasts to explore and record fossil discoveries. Inspired by field notebooks and geological maps, it combines scientific accuracy with archival aesthetics.
<br>It offers an immersive digital field journal where fossils are restored to their geographic context and every site reveals part of Earth’s ancient story.


## 🚀 Features
🌐 **Front‑End**
- 🗺️ **Interactive Map**  
    Discover dinosaur localities with custom markers, expedition‑style textures, and popups showing specimen details.
- 📍 **Add & Edit Discoveries**   
  Floating action button lets logged‑in users add new fossil coordinates and details.
- 🔍 **Search Bar**  
  Quickly locate fossils by name or location.
- 👤 **User Authentication Modal**  
  Glass‑style overlay with forms for login/register.
- 🛡️ **Type Safe Data Model**  
  Fossil shape enforced with TypeScript interfaces for predictable rendering and maintainability.
- ♿ **Accessibility Considerations**  
  Semantic HTML, keyboard navigation, and clear contrast for readability.

## 🧪 Technologies Used

- **React** with Hooks
- **TypeScript**
- **CSS** 
- **Leaflet / React‑Leaflet** for maps
- **React Router**


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
- ♿ Accessibility audit and improvements


## 👩‍💻 Author
Created by:
- **Claire Peyre**