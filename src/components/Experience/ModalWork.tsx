import { motion } from 'framer-motion';
import { Collapse } from "react-collapse";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript , SiReact, SiMongodb, SiMysql, SiDocker, SiLinux, SiHtml5, SiCss3 } from "react-icons/si";


interface IModalWork {
  isOpen: boolean;
  description: string;
  date: string;
  frameworks: any;
}

export function ModalWork({isOpen, description, frameworks, date}: IModalWork) {
  if(!isOpen) return null;

  return(
    <Collapse isOpened={isOpen}>
      <motion.div
        initial={{opacity: 0, y: -90}}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        animate={{opacity: 1, y: 0,}}
        exit={{opacity: 0, y: -100,}}
      >
        <motion.div
          className="w-full h-auto flex-col justify-center items-center bg-zinc-300 p-4 border-t-2 border-default text-black"
        >
          <div>
            <p className='text-violet-800 text-start'>{date}</p>
          </div>

          <div className='flex w-full justify-center my-3 text-justify'>
            <p>{description}</p>
          </div>

          <div>

          </div>
          <div className='group grid grid-flow-col'>
            {frameworks.map((framework: any) => (
                <div key={framework.id} className='w-auto flex justify-center group-hover:scale-110 group-hover:rotate-12 ease-linear duration-700'>
                  <div className='w-auto h-8 bg-violet-800 p-2 rounded-full shadow-default shadow-violet-800'>
                      {framework.icon === 'SiTypescript' && <SiTypescript color="#e5dede"/>}
                      {framework.icon === 'IoLogoJavascript' && <IoLogoJavascript color="#e5dede"/>}
                      {framework.icon === 'SiReact' && <SiReact color="#e5dede"/>}
                      {framework.icon === 'SiMongodb' && <SiMongodb color="#e5dede"/>}
                      {framework.icon === 'SiMysql' && <SiMysql color="#e5dede"/>}
                      {framework.icon === 'SiDocker' && <SiDocker color="#e5dede"/>}
                      {framework.icon === 'SiLinux' && <SiLinux color="#e5dede"/>}
                      {framework.icon === 'SiHtml5' && <SiHtml5 color="#e5dede"/>}
                      {framework.icon === 'SiCss3' && <SiCss3 color="#e5dede"/>}
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </Collapse>
  );
}
