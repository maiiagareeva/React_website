import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Photography from "./pages/Photography";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
