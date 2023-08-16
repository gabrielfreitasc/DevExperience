import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from '../ArrowDown';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

import curriculo from '../../../public/Curriculo_GabrielFreitas.pdf'
import { fadeInAnimationVariants } from '../../utils/fadeInAnimationVariants';

export function Work() {
  // const [isOpen, setIsOpen] = useState();
  const [dataExperience, setDataExperience] = useState([]);

  const { t } = useTranslation("global");

  useEffect(() => {
    // fetch("http://localhost:5173/static/experiences.json")
    fetch("https://gabrielfreitasc.github.io/DevExperience/static/experiences.json")
      .then((response) => response.json())
      .then(setDataExperience);
  })

  if(!dataExperience || !dataExperience.length) return null;

  return(
    <motion.div
      className='w-full h-full flex flex-col font-suprecot bg-gradient-to-tl from-violet-950 via-black to-default background-animate pt-10 xs:pt-44'
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h2 className='font-suprecot flex justify-center text-5xl xs:text-4xl'>{t("EXPERIENCE_PAGE.title3")}</h2>
      <div className='flex flex-col justify-center items-center'>
        {dataExperience.map((item) => {
          const { id, name, local, date } = item;
          return (
              <motion.div
                key={id}
                className='flex flex-col items-center min-w-[400px] min-h-[100px] rounded-md font-sans border-2  my-6 p-2 border-violet-500 hover:border-violet-700 hover:bg-violet-950 hover:bg-opacity-30 ease-in-out duration-200 xs:w-[80%] xs:text-center xs:min-w-0 xs:px-2'
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={id}
              >
                <h3>{name}</h3>
                <p className='w-[80%] text-center my-1 text-zinc-300'>{local}</p>
                <p className='text-cyan-600'>{date}</p>
              </motion.div>
          );
          })
        }
      </div>
      <div className='w-full flex items-center justify-center'>
        <a href={curriculo} download target='_blank' className='text-2xl flex justify-center items-center w-40 hover:scale-105 ease-in-out duration-300 border-2 border-violet-800 px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
          {t("EXPERIENCE_PAGE.ButtonDownload")} <BsFillFileEarmarkPdfFill />
        </a>
      </div>

      <div className='col-span-2 flex justify-center items-center h-[40%] xs:hidden'>
        <ArrowDown data='project' />
      </div>
    </motion.div>
  );
}
