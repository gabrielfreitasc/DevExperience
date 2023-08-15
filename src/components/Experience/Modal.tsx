import { Collapse } from "react-collapse";
import { AiOutlineLink } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript , SiReact, SiMongodb, SiMysql, SiDocker, SiLinux, SiHtml5, SiCss3 } from "react-icons/si";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';


interface IModal {
  openDescription: boolean;
  description: string;
  link: string;
  idItem: boolean;
  skills: any;
}

export function Modal({openDescription, description, link, idItem, skills}: IModal) {
  if(!openDescription) return null;

  return(
    <AnimatePresence mode="popLayout">

      <motion.div
        initial={{opacity: 0, x: -90}}
        transition={easeInOut}
        animate={{opacity: 1, x: 0,}}
        exit={{opacity: 0, x: -100,}}
        className={`group w-[50%] flex flex-row items-center text-left gap-5 p-4 rounded-md border-2 border-zinc-400 hover:bg-zinc-100 hover:bg-opacity-10 ease-in-out duration-300 ${openDescription === idItem ? "" : "hover:opacity-80"} xs:flex-col xs:mt-5 xs:w-[95%]`}
      >
        <Collapse isOpened={openDescription}>
          <div className="flex items-center xs:w-full xs:flex-col xs:items-start">
            <p className="w-2/3 font-sans text-base xs:w-full">{description}</p>
            <div className="grid grid-flow-row grid-cols-3 gap-2 h-20 ml-2 xs:flex xs:items-center">
              <a href={link} target="_blank" className="absolute right-14 hover:rotate-6 hover:scale-110 ease-in-out duration-300 xs:bg-violet-950 xs:p-2 xs:rounded-full"><AiOutlineLink size={30}/></a>

            {skills.map((skill: any) => (
              <div className="">
                <div key={skill.id} className="w-auto h-8 bg-violet-500 p-2 rounded-full group-hover:scale-110 group-hover:rotate-12 ease-linear duration-700">
                  {skill.icon === 'SiTypescript' && <SiTypescript />}
                  {skill.icon === 'IoLogoJavascript' && <IoLogoJavascript />}
                  {skill.icon === 'SiReact' && <SiReact />}
                  {skill.icon === 'SiMongodb' && <SiMongodb />}
                  {skill.icon === 'SiMysql' && <SiMysql />}
                  {skill.icon === 'SiDocker' && <SiDocker />}
                  {skill.icon === 'SiLinux' && <SiLinux />}
                  {skill.icon === 'SiHtml5' && <SiHtml5 />}
                  {skill.icon === 'SiCss3' && <SiCss3 />}
                </div>
              </div>
            ))}
            </div>
          </div>
        </Collapse>
      </motion.div>
    </AnimatePresence>
  );
}
