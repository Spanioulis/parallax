/* eslint-disable no-undef */
import { useEffect } from 'react';
import './App.scss';
import { Parallax } from 'react-parallax';
import image1 from '/images/background_01.png';
import image2 from '/images/background_02.png';
import image3 from '/images/background_03.png';
import { Link } from 'react-router-dom';

function App() {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.parallax-element').forEach((element) => {
         gsap.to(element, {
            duration: 10,
            repeat: -1,
            scale: 1.1,
            yoyo: true
         });
      });
   }, []);

   return (
      <>
         <header>
            <div>
               <h1>Parallax</h1>
            </div>

            <nav>
               <ul>
                  <Link to="css" className="link">
                     <li>Vanilla CSS</li>
                  </Link>
                  <Link to="scroll-parallax" className="link">
                     <li>React Scroll Parallax</li>
                  </Link>
               </ul>
            </nav>
         </header>
         <main className="main">
            <section>
               <Parallax className="image parallax-element" bgImage={image1}>
                  <div className="container">
                     <p>BACKGROUND 1</p>
                  </div>
               </Parallax>
            </section>
            <section>
               <Parallax className="image parallax-element" bgImage={image2} strength={500}>
                  <div className="container">
                     <p>BACKGROUND 2</p>
                  </div>
               </Parallax>
            </section>
            <section>
               <Parallax className="image parallax-element" bgImage={image3} strength={500}>
                  <div className="container">
                     <p>BACKGROUND 3</p>
                  </div>
               </Parallax>
            </section>
            {/* <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_01.png')` }}
               />
               <div className="container">
                  <p>Container</p>
               </div>
            </section> */}
         </main>
      </>
   );
}

export default App;
