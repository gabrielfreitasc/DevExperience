import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiGraduationCap } from 'react-icons/pi'
import { motion } from 'framer-motion';
// import { IoLogoJavascript, IoLogo } from 'react-icons/io';
import { Modal } from "./Modal";



export function Courses() {
  const [dataCourses, setDataCourses] = useState([]);
  const [openDescription, setOpenDescription] = useState(dataCourses[0]);
  const [opened, setOpened] = useState(false);

  const { t } = useTranslation("global");

  useEffect(() => {
    // fetch("http://localhost:5173/static/courses.json")
    fetch("https://gabrielfreitasc.github.io/DevExperience/static/courses.json")
    .then((response) => response.json())
    .then(setDataCourses);
  })

  if(!dataCourses || !dataCourses.length) return null;

  return(
    <div className='border-violet-600 w-full h-[430px] xs:flex xs:flex-col xs:items-center'>
      <h2 className="font-suprecot flex justify-center text-5xl xs:text-4xl">{t("EXPERIENCE_PAGE.title2")}</h2>
      <div className="flex flex-col gap-10 my-10 mx-10 xs:mx-0">
        {dataCourses.map((item) => {
          const { id, name, description, plataform, link, skills } = item;
          return (
            <div key={id} id={id} className="flex items-center xs:w-full xs:flex-col xs:items-start">
              <div className="flex gap-4 w-1/2 ml-20 xs:w-auto xs:ml-8">
                <motion.button onTap={() => setOpened(!opened)} onClick={() => setOpenDescription(id)} transition={{duration: 0.3}} className={`group inset-0 w-12 h-12 p-2 border-2 border-violet-800 rounded-full bg-transparent flex items-center bg-gradient-to-r hover:bg-gradient-to-r from-violet-800 to-purple-950 cursor-pointer ease-in-out duration-500 ${openDescription !== id && "bg-none"}`}>
                  <PiGraduationCap size={30} className="group-hover:rotate-6 ease-linear duration-500"/>
                </motion.button>
                <div className="flex flex-col">
                  <h3 className="text-4xl xs:text-2xl xs:text-start">{name}</h3>
                  <p className="font-sans text-end text-violet-600 xs:text-start">{plataform}</p>
                </div>
              </div>
              {openDescription === id && opened === true ? (
                <Modal openDescription={openDescription} description={description} link={link} idItem={id} skills={skills}/>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
