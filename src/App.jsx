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
               >
                  <div>Background 1</div>
               </div>
            </section>
            <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_02.png')` }}
               >
                  Background 2
               </div>
            </section>
            <section>
               <div
                  className="bg-cover parallax-element"
                  style={{ backgroundImage: `url('/images/background_03.png')` }}
               >
                  Background 3
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
