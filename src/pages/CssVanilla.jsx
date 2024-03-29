import { Link } from 'react-router-dom';
import '../styles/CssVanilla.scss';

export const CssVanilla = () => {
   return (
      <>
         <nav className="nav-css">
            <ul>
               <Link to="/">
                  <li>Home</li>
               </Link>
            </ul>
         </nav>
         <section className="bg-1">
            <div>
               <h1 className="title">Selva Amazónica 1</h1>
            </div>
         </section>
         <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corrupti quod a possimus corporis
            laudantium, provident ipsam perspiciatis magni! Reiciendis optio eos pariatur hic! Ab ea itaque, nesciunt
            ducimus maiores sequi quo temporibus unde consectetur facere vero, architecto dolore eos.
         </div>
         <section className="bg-2">
            <h1 className="title">Selva Amazónica 2</h1>
         </section>
         <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corrupti quod a possimus corporis
            laudantium, provident ipsam perspiciatis magni! Reiciendis optio eos pariatur hic! Ab ea itaque, nesciunt
            ducimus maiores sequi quo temporibus unde consectetur facere vero, architecto dolore eos.
         </div>
         <section className="bg-3">
            <h1 className="title">Selva Amazónica 3</h1>
         </section>
         <div className="content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam corrupti quod a possimus corporis
            laudantium, provident ipsam perspiciatis magni! Reiciendis optio eos pariatur hic! Ab ea itaque, nesciunt
            ducimus maiores sequi quo temporibus unde consectetur facere vero, architecto dolore eos.
         </div>
      </>
   );
};
