import logoIcon from '../assets/logo.png'
import { Link } from 'react-scroll';

export function Header() {
  return (
    <div className="fixed bg-transparent flex flex-row h-20 items-center justify-between p-2 w-full font-bebas">

      <Link activeClass="active" to='home' spy={true} smooth={true} offset={0} duration={500}>
        <img src={logoIcon} alt="Logo Gabriel Freitas" className='ml-6 w-20 h-20 hover:scale-125 transition-all duration-300 cursor-pointer'/>
      </Link>

      <nav className='mr-6'>
        <ul className='flex gap-10 justify-around items-center'>
          <li>
            <Link
              activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}
              className=' border-violet-700 hover:border-b-4 hover:animate-pulse duration-200 ease-in-out font-semibold cursor-pointer'
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}
              className='border-violet-700 hover:border-b-4 hover:animate-pulse duration-200 ease-in-out font-semibold cursor-pointer'
            >
              About
            </Link>
          </li>

          <li>
            <Link
              activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500}
              className='border-violet-700 hover:border-b-4 hover:animate-pulse duration-200 ease-in-out font-semibold cursor-pointer'
            >
              Experience
            </Link>
          </li>

          <li>
          <Link
              activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}
              className='border-violet-700 hover:border-b-4 hover:animate-pulse duration-200 ease-in-out font-semibold cursor-pointer'
            >
              Project
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}
