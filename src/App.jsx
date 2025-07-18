import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlackPepperPage from "./components/spices/BlackPepper";
import CinnamonPage from "./components/spices/Cinnamon";
import WhitePepperPage from "./components/spices/WhitePepper";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/black-pepper" element={<BlackPepperPage />} />
        <Route path="/cinnamon" element={<CinnamonPage />} />
        <Route path="/white-pepper" element={<WhitePepperPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
