import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects(){
  const items = [
    {title:'AgRobotics Lab', desc:'LLM integration to the application of detecting leaves diseases.'},
    {title:'Portfolio', desc:'Creating Website - Portfolio using Figma, React, JS and HTML.'},
    {title:'YOLOv11', desc:'Experiencing with YOLO integration.'},
    {title:'#####', desc:'################'},
    {title:'#####', desc:'################'},
    {title:'#####', desc:'################'},
  ];
  return (
    <>
      <Navbar />
      <main className="container section">
        <h2 className="title">MY PROJECTS</h2>
        <div className="cards">
          {items.map((it,i)=> (
            <article className="card" key={i}>
              <div className="card-thumb">{it.title}</div>
              <div className="card-body">
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <a href="#">code →</a>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
