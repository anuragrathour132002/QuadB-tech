import React from "react";
import './index.css'
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import ItemDetails from "./Components/ItemDetails";
import BookTicket from "./Components/BookTicket";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/item_details" element={<ItemDetails />} />
        <Route path="/book_ticket" element={<BookTicket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
