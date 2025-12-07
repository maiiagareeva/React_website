import React, { useState } from "react";

export default function About(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <main className="container section">
        <h2 className="title">ABOUT ME</h2>
        <div className="about-grid">
          <div>
            <p><strong>Hello!</strong> I'm Maiia Gareeva, ongoing international student in the 
            University of Minnesota majoring in <strong>Data Science&Statistics</strong>. I'm a passionate developer and photographer 
            who loves to create CHURMFUL and EFFICIENT experiences.</p>
            <p>I combine technical expertise with creative vision to build projects that are not only functional but 
              also aesthetically pleasing. It realizes my creative side despite making music, art, snowbording and more and more.</p>
            <p>I'm also a founder of my podcast <i>BeeInBoots Broadcasts</i> available on {' '}
            <a 
              href="https://apple.co/4awk7hb" 
              target="_blank" 
              rel="noreferrer"
              className="about-link"
            >
              Apple Podcasts
            </a>{' '}
            and{' '}
            <a 
              href="https://soundcloud.com/beeinboots" 
              target="_blank" 
              rel="noreferrer"
              className="about-link"
            >
              SoundCloud
            </a>{' '}
            platforms.
            </p>
            <h3>What I Do</h3>
            <ul className="skills">
              <li><strong>Web Development</strong><span>HTML, CSS, JavaScript, React, Vite</span></li>
              <li><strong>Data Science</strong><span>Python, SQL, Java, ML, LLM</span></li>
              <li><strong>Photography</strong><span>Nikon, Canon, Sony, Adobe Lightroom</span></li>
              <li><strong>UI/UX Design</strong><span>Figma, Adobe <i>Photoshop, Lightroom, Illustrator</i> </span></li>
            </ul>
            <h3>Get In Touch</h3>
            <p>I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!</p>
            <ul>
              <li><a href="mailto:mailiagareeva@gmail.com">maiiagareeva@gmail.com</a></li>
              <li>Minneapolis, MN, United States</li>
            </ul>
          </div>
          <div className="hero-right">
            <img src="/images/backgrey.jpg" alt="My portrait" className="clickable-image"
              onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
        {isModalOpen && (
          <div className="modal" onClick={() => setIsModalOpen(false)}>
            <img
              src="/images/backgrey.jpg"
              alt="My portrait large"
              className="modal-content"
            />
          </div>
        )}
      </main>
    </>
  );
}
