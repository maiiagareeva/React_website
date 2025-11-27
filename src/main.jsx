import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
