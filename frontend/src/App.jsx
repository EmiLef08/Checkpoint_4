import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import MobNavbar from "./components/MobNavbar";
import DeskNavbar from "./components/DeskNavbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <DeskNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MobNavbar />
      <Footer />
    </div>
  );
}

export default App;
