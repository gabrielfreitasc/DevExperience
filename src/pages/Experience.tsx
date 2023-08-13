import { useEffect, useState } from 'react';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';
import { ArrowDown } from '../components/ArrowDown';
import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants';
import { motion } from "framer-motion";

import curriculo from '../../public/Curriculo_GabrielFreitas.pdf'
import { useTranslation } from 'react-i18next';

const fadeInAnimationVariantsY = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.10 * id,
    }
  }),
}

const fadeInAnimationVariantsX = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: (id: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * id,
    }
  }),
}

export function Experience() {
  const [isShow, setisShow] = useState(false);
  const [dataCourses, setDataCoursers] = useState([]);
  const [dataExperience, setDataExperience] = useState([]);

  const { t } = useTranslation("global");

  useEffect(() => {
    // fetch("http://localhost:5173/static/courses.json")
    fetch("https://gabrielfreitasc.github.io/DevExperience/static/courses.json")
      .then((response) => response.json())
      .then(setDataCoursers);
  })

  useEffect(() => {
    // fetch("http://localhost:5173/static/experiences.json")
    fetch("https://gabrielfreitasc.github.io/DevExperience/static/experiences.json")
      .then((response) => response.json())
      .then(setDataExperience);
  })

  if(!dataCourses || !dataCourses.length) return null;
  if(!dataExperience || !dataExperience.length) return null;

  return (
    <motion.div
      id="experience"
      className="w-full h-full font-suprecot bg-gradient-to-bl from-violet-950 via-black to-default background-animate"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 xs:text-5xl">{t("EXPERIENCE_PAGE.title")}</h1>
      <div className="grid grid-cols-2 grid-rows-2 mt-5 xs:grid-cols-none xs:grid-rows-none xs:flex xs:flex-col">
        <div className='border-violet-600 h-[430px] xs:my-14 xs:flex xs:flex-col xs:justify-center xs:items-center'>
          <h2 className="font-suprecot flex justify-center text-5xl xs:text-4xl">{t("EXPERIENCE_PAGE.title2")}</h2>

          {dataCourses.map((item) => {
            const { id, name, link } = item;
            return (
              <motion.span
                key={id}
                className="font-sans flex items-center w-[55%] gap-6 ml-10 my-6 p-2 border-l-2 border-violet-500 hover:border-violet-700 hover:bg-zinc-800 ease-in-out duration-300"
                variants={fadeInAnimationVariantsY}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={id}
              >
                <h3>{name}</h3>
                <a href={link} target='_blank' className="border-2 border-white bg-white rounded-full ease-in-out duration-300 hover:bg-zinc-300 hover:border-zinc-300 transition-all" onMouseEnter={() => setisShow(true)} onMouseLeave={() => setisShow(false)}>
                  {isShow ? (
                    <GrFormView size={20}  />
                  ) : (
                    <GrFormViewHide size={20} />
                  )}
                </a>
              </motion.span>
            );
          })}
        </div>
        <motion.div
          variants={fadeInAnimationVariantsY}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className='border-l-2 border-violet-600 xs:border-none xs:mt-5 flex flex-col items-center'
        >
          <h2 className='font-suprecot flex justify-center text-5xl xs:text-4xl'>{t("EXPERIENCE_PAGE.title3")}</h2>

          <div className='flex flex-col justify-center items-center'>
            {dataExperience.map((item) => {
              const { id, name, local, date } = item;
              return (
                  <motion.div
                    key={id}
                    className='flex flex-col items-center w-auto h-auto rounded-md font-sans border-2  my-6 p-2 border-violet-500 hover:border-violet-700 hover:bg-violet-950 hover:bg-opacity-30 ease-in-out duration-200 xs:w-[80%] xs:text-center'
                    variants={fadeInAnimationVariantsX}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                    custom={id}
                  >
                    <h3>{name}</h3>
                    <p className='w-[80%] text-center my-1 text-zinc-300'>{local}</p>
                    <p className='text-cyan-400'>{date}</p>
                  </motion.div>
              );
            })

            }
          </div>

            <a href={curriculo} download target='_blank' className='text-2xl flex justify-center items-center w-auto hover:scale-105 ease-in-out duration-300 border-2 border-violet-800 px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
            {t("EXPERIENCE_PAGE.ButtonDownload")} <BsFillFileEarmarkPdfFill />
            </a>
        </motion.div>

        <div className='col-span-2 flex justify-center items-center h-[40%] xs:hidden'>
          <ArrowDown data='project' />
        </div>
      </div>
    </motion.div>
  );
}
