import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { generateTypeIt } from '../utils/generatetypeit';
import { ArrowDown } from '../components/ArrowDown';

export function Home() {
  const textGenerated = generateTypeIt()

  return (
    <div id='home' className="w-full h-full grid grid-cols-2  font-suprecot bg-gradient-to-bl from-violet-950 via-black to-default background-animate">
      <div className="flex flex-col justify-center pl-12 ml-16">
        <div className='text-7xl'>
          <h2>Ola, eu sou</h2>
          <h1 className='text-9xl my-6 uppercase text-violet-800'>{textGenerated}</h1>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <div className='flex justify-evenly mt-8 items-center mr-36'>
          <a href="https://github.com/gabrielfreitasc" target='_blank' className='hover:scale-105 ease-in-out duration-300 border-2 border-white flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
            Github <AiFillGithub size={30} />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-freitasdev/" target='_blank' className='hover:scale-105 ease-in-out duration-300 border-2 border-white flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
            Linkedin <AiFillLinkedin size={30} />
          </a>

        </div>
      </div>

      <div className='border-4 border-violet-900 rounded-full w-80 h-80 mx-auto overflow-hidden mt-52 hover:shadow-light-violet bg-cover ease-in-out duration-1000'>
        <img src="../../public/avatar.png" alt="Avatar Programador"  className='w-full h-full'/>
      </div>

      <div className='flex col-span-2 justify-center'>
        <ArrowDown data="about" />
      </div>
    </div>
  );
}
