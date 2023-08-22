import { useState, useEffect } from 'react';
import { ArrowDown } from '../ArrowDown';
import { ModalWork } from './ModalWork';
import { fadeInAnimationVariants } from '../../utils/fadeInAnimationVariants';
import { MdWorkOutline } from 'react-icons/md'
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { LayoutGroup, motion } from 'framer-motion';

import curriculo from '../../../public/Curriculo_GabrielFreitas.pdf'

export function Work() {
  const [dataExperience, setDataExperience] = useState([]);
  const [opened, setOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(dataExperience[0]);

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
      <div className='flex flex-col items-center'>
        {dataExperience.map((item) => {
          const { id, name, local, date, description, frameworks } = item;
          return (
              <motion.div
                key={id}
                className='group w-[500px] flex-col font-sans border-2 my-4 p-4 bg-zinc-300 ease-in-out duration-200 xs:w-[80%] xs:text-center xs:min-w-0 xs:px-2'
                onClick={() => setIsOpen(id)}
                onTap={() => setOpened(!opened)}
                initial={false}
                animate={isOpen === id && opened === true ? 'open' : 'closed'}
              >
                <div className='flex justify-between items-center pb-2   h-auto'>
                  <motion.div className='group-hover:rotate-6 ease-in-out duration-700'>
                    <MdWorkOutline size={30} color="#09090A"/>
                  </motion.div>

                  <div className="flex-col justify-center items-center mx-5 text-black">
                    <h3>{name}</h3>
                    <p className='text-center my-1 text-black'>{local}</p>
                  </div>

                  <LayoutGroup id={id}>
                    <motion.div
                      className='border-default group-hover:scale-110 ease-in-out duration-200 cursor-pointer'
                      variants={{ open: {rotate: 180}, close: {rotate: 0} }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                      key={id}
                    >
                      <IoIosArrowDown size={30} color="#09090A"/>
                    </motion.div>
                  </LayoutGroup>

                </div>
                <div>
                  <div>
                    {isOpen === id && opened === true ? (<ModalWork isOpen={isOpen} date={date} description={description} frameworks={frameworks} />) : null}
                  </div>
                </div>
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
