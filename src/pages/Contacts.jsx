import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacts(){
  return (
    <>
      <Navbar />
      <main className="container section">
        <h2 className="title">CONTACTS</h2>
        <ul className="contacts-list">
          <li>📧 <a href="mailto:mailiagareeva@gmail.com">mailiagareeva@gmail.com</a></li>
          <li>📍 Minneapolis, MN, United States</li>
          <li>🔗 <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
          <li>🔗 <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
