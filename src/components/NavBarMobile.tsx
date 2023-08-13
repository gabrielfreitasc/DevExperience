import { useState } from "react";
import { BiGroup, BiHomeAlt2, BiLogoReact } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-scroll";

export function NavBarMobile() {
  const [handleIcon, setHandleIcon] = useState(true)

  const toggleMenu = () => {
    setHandleIcon(!handleIcon);
  };

  return(
    <nav
    className={`absolute md:hidden w-full h-[300px] translate-y-28 -z-10 rounded-sm -translate-x-2 items-center justify-center cursor-pointer transition-opacity duration-300 ease-in-out ${handleIcon ? 'opacity-0' : 'opacity-90'} ${handleIcon ? 'bg-transparent' : 'bg-white'}`}
  >
    <ul
      className='md:hidden flex flex-col gap-2 mx-3 mt-20 text-white'
    >
      <li
        onClick={() => toggleMenu()}
        className={`group p-[6px] bg-violet-900 rounded-md text-lg hover:scale-105 hover:bg-violet-950 ease-in-out duration-300`}
      >
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} className='flex justify-between translate-x-[45%] group-hover:translate-x-0 ease-in-out duration-300'>
          <BiHomeAlt2 size={25} color='white'/>
          <p className='opacity-0 group-hover:opacity-100 ease-in-out duration-300 delay-75'>Home</p>
          <span className='opacity-0 ml-5'>A</span>
        </Link>
      </li>

      <li
        onClick={() => toggleMenu()}
        className={`group p-[6px] bg-violet-900 rounded-md text-lg hover:scale-105 hover:bg-violet-950 ease-in-out duration-300`}
      >
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className='flex justify-between translate-x-[45%] group-hover:translate-x-0 ease-in-out duration-300'>
          <BiGroup size={25} color="white" />
          <p className='opacity-0 group-hover:opacity-100 ease-in-out duration-300 delay-75'>About</p>
          <span className='opacity-0 ml-5'>A</span>
        </Link>
      </li>

      <li
        onClick={() => toggleMenu()}
        className={`group p-[6px] bg-violet-900 rounded-md text-lg hover:scale-105 hover:bg-violet-950 ease-in-out duration-300`}
      >
        <Link activeClass="active" to="experience" spy={true} smooth={true} offset={0} duration={500} className='flex justify-between translate-x-[45%] group-hover:translate-x-0 ease-in-out duration-300'>
          <MdWorkOutline size={25} color="white" />
          <p className='opacity-0 group-hover:opacity-100 ease-in-out duration-300 delay-75'>Experience</p>
          <span className='opacity-0 ml-5'>A</span>
        </Link>
      </li>

      <li
        onClick={() => toggleMenu()}
        className={`group p-[6px] bg-violet-900 rounded-md text-lg hover:scale-105 hover:bg-violet-950 ease-in-out duration-300`}
      >
        <Link activeClass="active" to="project" spy={true} smooth={true} offset={0} duration={500} className='flex justify-between translate-x-[45%] group-hover:translate-x-0 ease-in-out duration-300'>
          <BiLogoReact size={25} color="white" />
          <p className='opacity-0 group-hover:opacity-100 ease-in-out duration-300 delay-75'>Project</p>
          <span className='opacity-0 ml-5'>A</span>
        </Link>
      </li>
    </ul>
  </nav>
    );
}
