import './App.css';

function App() {
   return (
      <>
         <header>
            <div>
               <h1>Parallax</h1>
            </div>
         </header>
         <main>
            <section>
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_01.png')` }}>
                  Background 1
               </div>
            </section>
            <section>
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_02.png')` }}>
                  Background 2
               </div>
            </section>
            <section>
               <div className="bg-cover" style={{ backgroundImage: `url('/images/background_03.png')` }}>
                  Background 3
               </div>
            </section>
         </main>
      </>
   );
}

export default App;
