import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import FAQ from "./pages/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import Reviews from "./pages/ReviewsPage/ReviewPage.jsx";
import GeoLocationPage from "./pages/GeoLocationPage/GeoLocationPage.jsx";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/form" element={<FAQ />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/services_for_individuals" element={<ServicesPage />} />
        <Route exact path="/services_for_individuals/geolocation" element={<GeoLocationPage />} />
        <Route exact path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
