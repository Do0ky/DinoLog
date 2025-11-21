/* REACT */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </BrowserRouter>
  );
}

export default App;