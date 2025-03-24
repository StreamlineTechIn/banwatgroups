import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./compnents/Landing_Page/Main";
import Navbar from "./compnents/Navbar/Navbar";
import ProductList from "./compnents/ProductList/ProductList";
import ProductDisplay from "./compnents/ProductList/ProductDisplay";
import About from "./compnents/About/About";
import Plants from "./compnents/Plants/Plants";
import FAQ from "./compnents/FAQ/FAQ";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from "./compnents/Contact/Contact";
import Footer from "./compnents/Landing_Page/Footer";

function App() {
  return (
    <BrowserRouter>
      <div
        className="bg-[#D7EAD3] min-h-screen flex flex-col items-center"
        style={{
          backgroundColor: "#f2fff0",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDisplay/>} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
