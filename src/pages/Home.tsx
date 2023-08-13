import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { generateTypeIt } from '../utils/generatetypeit';
import { ArrowDown } from '../components/ArrowDown';
import avatar from '../../public/static/image/avatar.png'
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants';
import { useTranslation } from 'react-i18next';

export function Home() {
  const textGenerated = generateTypeIt()
  const { t } = useTranslation("global");

  return (
    <motion.div
      id='home'
      className="w-full h-full grid grid-cols-2 font-suprecot bg-gradient-to-bl from-violet-950 via-black to-default background-animate xs:grid-cols-none xs:flex xs:flex-col-reverse xs:justify-center"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col justify-center pl-10 ml-16 xs:ml-0 xs:items-center xs:text-center xs:pl-0 xs:mt-10">
        <div className='xl:text-6xl mt-32 xs:text-4xl xs:mt-0'>
          <h2>{t('HOME_PAGE.part1')}</h2>
          <h1 className='xl:text-9xl lg:text-8xl my-6 uppercase xs:my-2 xs:text-5xl text-violet-700'>{textGenerated}</h1>
          <h2>{t("HOME_PAGE.part2")}</h2>
        </div>
        <div className='flex justify-evenly mt-8 items-center mr-60 xs:gap-10 xs:mr-0'>
          <a href="https://github.com/gabrielfreitasc" target='_blank' className='hover:scale-105 ease-in-out duration-300 border-2 border-white flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
            Github <AiFillGithub size={30} />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-freitasdev/" target='_blank' className='hover:scale-105 ease-in-out duration-300 border-2 border-white flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
            Linkedin <AiFillLinkedin size={30} />
          </a>

        </div>
      </div>

      <div className='border-4 border-white rounded-full xl:w-80 xl:h-80 mx-auto overflow-hidden mt-52 hover:shadow-light-violet xs:shadow-light-violet hover:scale-110 bg-cover ease-in-out duration-1000 xs:-mt-5 xs:h-36 xs:flex'>
        <img src={avatar} alt="Avatar Programador"  className='w-full h-full'/>
      </div>

      <div className='flex col-span-2 justify-center xs:absolute xs:hidden'>
        <ArrowDown data="about" />
      </div>
    </motion.div>
  );
}
