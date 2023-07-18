import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import '../styles/ReactParallax.scss';

export const ReactParallax = () => {
   return (
      <div className="react-parallax">
         <nav className="navbar">
            <ul>
               <Link to="/">Home</Link>
            </ul>
         </nav>
         <div className="container">
            <Parallax className="container__bl1" opacity={[1, 0.5, 'easeInBack']}>
               <h1>My first Layer!</h1>
            </Parallax>
            <div className="text-container">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. A quia aperiam sequi doloremque corporis
               temporibus magni atque esse. Harum odio rerum repudiandae deleniti laboriosam quis non, dolores quisquam
               excepturi ea culpa itaque, facilis eius similique illo provident. Itaque sit ab necessitatibus non
               deserunt qui veniam quia eos rerum iste. Ut quis accusantium, explicabo nisi optio suscipit quia iusto
               voluptatum commodi hic numquam dignissimos sapiente quibusdam dolore, temporibus obcaecati molestiae quod
               veniam voluptates vitae, maxime itaque. Quibusdam ad architecto animi ut?
            </div>
            <Parallax
               className="container__bl2"
               speed={50}
               // translateX={['-100px', '200px']}
               // translateY={[-100, 100, 'easeInOut']}
               scale={[0, 1, 'easeOutBack']}
            >
               <h1>My second Layer!</h1>
            </Parallax>
            <div className="text-container">
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt dolores corrupti quaerat odit
               est reiciendis iure consequuntur, omnis distinctio iste, sint error necessitatibus. Dolorem nihil
               accusamus sapiente nulla animi sunt quisquam ipsam, magni mollitia sequi corporis id inventore, eos
               tempora impedit sint vitae asperiores voluptatem porro, unde natus sed delectus nostrum. Rem quis dolor
               maiores recusandae totam ipsum architecto, officia doloremque et culpa deserunt eum dolorem esse? Fugiat
               eligendi eveniet veritatis dignissimos voluptatem, iste velit consequuntur consequatur praesentium
               recusandae?
            </div>
            <Parallax
               className="container__bl3"
               // translateX={['-100px', '200px']}
               // scale={[1, 1.5, 'easeInCirc']}
               opacity={[0, 1, 'easeOutBack']}
            >
               <h1>My third Layer!</h1>
            </Parallax>
         </div>
      </div>
   );
};
