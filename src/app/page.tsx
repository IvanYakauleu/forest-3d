'use client';

import RainCanvas from '../Components/Rain/Rain';
import { useRef, useEffect } from 'react';

export default function Home() {
  const mouseRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    if (mouseRef.current) {
      mouseRef.current.style.setProperty(
        '--move-x',
        `${(e.clientX - window.innerWidth / 2) * -0.005}deg`,
      );
      mouseRef.current.style.setProperty(
        '--move-y',
        `${(e.clientY - window.innerHeight / 2) * -0.01}deg`,
      );
    }
  };

  return (
    <main ref={mouseRef} onMouseMove={handleMouseMove}>
      <div className="logo" style={{ backgroundImage: 'url("/logo.svg")' }}></div>
      <section className="layers">
        <div className="layers__container">
          <div
            className="layers__item layer-1"
            style={{ backgroundImage: 'url(/layer-1.jpg)' }}></div>
          <div
            className="layers__item layer-2"
            style={{ backgroundImage: 'url(/layer-2.png)' }}></div>
          <div className="layers__item layer-3">
            <div className="hero-content">
              <h1>
                NATURAL FOREST <span>HTML / CSS</span>
              </h1>
              <div className="hero-content__p">
                Creating a beautiful 3D website with a ‘lens effect’
              </div>
              <button className="button-start">Start Learning</button>
            </div>
          </div>
          <div className="layers__item layer-4">
            <RainCanvas />
          </div>
          <div
            className="layers__item layer-5"
            style={{ backgroundImage: 'url(/layer-5.png)' }}></div>
          <div
            className="layers__item layer-6"
            style={{ backgroundImage: 'url(/layer-6.png)' }}></div>
        </div>
      </section>
    </main>
  );
}
