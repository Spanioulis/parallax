import { useEffect, useRef } from 'react';
import './App.css';

function App() {
   const block1 = useRef(null);

   useEffect(() => {
      // eslint-disable-next-line no-undef
      gsap.to(block1.current, {
         duration: 10,
         repeat: -1,
         scale: 1.1,
         yoyo: true
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
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_01.png')` }} ref={block1}>
                  <div>Background 1</div>
               </div>
            </section>
            <section>
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_02.png')` }} ref={block1}>
                  Background 2
               </div>
            </section>
            <section>
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_03.png')` }} ref={block1}>
                  Background 3
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
