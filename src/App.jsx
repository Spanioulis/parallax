/* eslint-disable no-undef */
import { useEffect } from 'react';
import './App.css';

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
         </header>
         <main>
            <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_01.png')` }}
               />
               <div className="container">
                  <p>Container</p>
               </div>
            </section>
            <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_02.png')` }}
               />
               <div className="container">
                  <p>Container</p>
               </div>
            </section>
            <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_03.png')` }}
               />
               <div className="container">
                  <p>Container</p>
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
