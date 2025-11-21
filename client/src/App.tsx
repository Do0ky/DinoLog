/* REACT */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';
/* PAGES */
import HomePage from './pages/HomePage';
import MyFossilsPage from './pages/MyFossilsPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myfossils" element={<MyFossilsPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;