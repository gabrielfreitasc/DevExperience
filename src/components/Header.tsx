import logoIcon from '../assets/logo.png'
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { BiHomeAlt2, BiGroup, BiLogoReact } from 'react-icons/bi'
import { MdWorkOutline, MdClose } from 'react-icons/md'
import { useState } from 'react';
import { NavBarMobile } from './NavBarMobile';
import { NavBarDesktop } from './NavBarDesktop';
import { ButtonLanguage } from './ButtonLanguage';

export function Header() {
  // // const [colorNav, setColorNav] = useState('#4c1d95');
  const [handleIcon, setHandleIcon] = useState(true)

  const toggleMenu = () => {
    setHandleIcon(!handleIcon);
  };

  return (
    <div className="fixed z-50 bg-black bg-opacity-10 shadow-lg flex flex-row h-20 items-center justify-between p-2 w-full font-bebas">

    <div className='flex gap-10 justify-center items-center'>
      <Link activeClass="active" to='home' spy={true} smooth={true} offset={0} duration={500}>
          <img src={logoIcon} alt="Logo Gabriel Freitas" className={`ml-4 w-20 h-20 hover:scale-125 ease-in duration-300 cursor-pointer xs:w-16 xs:h-16`}/>
      </Link>
      <ButtonLanguage />
    </div>



    <div>
      <div className='hidden'>
        <NavBarMobile />
      </div>
      <div
          onClick={() => toggleMenu()}
          className='hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'
        >
          {
            !handleIcon ? <MdClose className="md:hidden mr-6" size={35} color='#4c1d95' /> : <FaBars className="md:hidden mr-6" size={30} color='#fff' />
          }
      </div>
    </div>

        {!handleIcon && (
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
          )
        }

        <NavBarDesktop />
        </div>
  );
}
