import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./components/AnimeItem";
import Gallery from "./components/Gallery";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem/>} />
        <Route path="/character/:id" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

