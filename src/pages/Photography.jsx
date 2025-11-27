import React, { useEffect, useState } from "react";

const photoFiles = import.meta.glob('/public/images/photo*.jpg', { eager: true, import: 'default' });
const photos = Object.keys(photoFiles).map((path) => path.replace('/public', ''));

const captions = [
  'Puring on the lake, before the hurricane, Onega Lake, Karelia, Russia. July 2025',
  'Missisipi river view from the Hustings Park, South MN, United States. October 2025',
  'Stone on the sand wiht pretty note, Lake Superior, MI, United States. September 2025',
  'Boat on the lakeshore, Lake Superior, MI, United States. September 2025',
  'Human touching freezing cold water, Lake Superior, MI, United States. September 2025',
  'Kayaking on the lake, Lake Superior, MI, United States. September 2025',
  "Woman's hand exploring pine resin, Bear Lake Park, North MN. October 2025",
  "View point of late fall, Bear Lake Park, North MN. October 2025",
  "Old car with wheat plants, Hustings, South MN, United States. October 2025",
  "Yacht on the lake, Falling lakes, Onega Lake, Karelia, Russia. July 2025",
  "Red chairs on the ground, University of Minnesota campus, September 2025",
  "Beautiful mashroom on the trail, MI, United States. September 2025",
  "Interesting tree on the lakeshore, Lake Superior, MI, United States. September 2025",
  "Lighthouse on the border with Canada, Grand Marais, North MN, United States. April 2025",
  "Kayaking on the lake, Lake Superior, MI, United States. September 2025",
  "Lakeshore, Lake Superior, MI, United States. September 2025",
  "Missisipi river view from the Hustings Park, South MN, United States. October 2025"
];



export default function Photography(){
  const [isOpen,setOpen] = useState(false);
  const [index,setIndex] = useState(0);
  const open = (i)=>{ setIndex(i); setOpen(true); };
  const close = ()=> setOpen(false);
  const prev = ()=> setIndex(i=>(i-1+photos.length)%photos.length);
  const next = ()=> setIndex(i=>(i+1)%photos.length);
  // keyboard
  useEffect(()=>{
    if(!isOpen) return;
    const onKey = (e)=>{
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') prev();
      if(e.key==='ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[isOpen]);

  return (
    <>
      <main className="container section">
        <h2 className="title">
          PHOTOGRAPHY
          <span className="info-icon" title="">
            ?
            <span className="info-popup">
              All photographs were taken personally by Maiia Gareeva.
              <br/>
              © 
              <br/>
              [Nikon Z30][Sony alpha6400][Canon Rebel DSLR]
            </span>
          </span>
        </h2>
        <div className="photo-grid">
          {photos.map((src,i)=>(
            <img className="photo" key={i} src={src} alt={`photo ${i+1}`} onClick={()=>open(i)} />
          ))}
        </div>
      </main>

      {isOpen && (
        <div className="lightbox" onClick={close}>
          <button className="lb-btn left" onClick={(e)=>{e.stopPropagation(); prev();}} aria-label="Previous">‹</button>
          <img className="lb-image" src={photos[index]} alt="large" onClick={(e)=>e.stopPropagation()} />
          <p className="lb-caption">{captions[index]}</p>
          <button className="lb-btn right" onClick={(e)=>{e.stopPropagation(); next();}} aria-label="Next">›</button>
          <button className="lb-close" onClick={(e)=>{e.stopPropagation(); close();}} aria-label="Close">×</button>
        </div>
      )}
    </>
  );
}
