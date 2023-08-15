import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants';
import { motion } from "framer-motion";


import { Courses } from '../components/Experience/Courses';
import { Work } from '../components/Experience/Work';
import { useTranslation } from 'react-i18next';

// const fadeInAnimationVariantsY = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (id: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.10 * id,
//     }
//   }),
// }

// const fadeInAnimationVariantsX = {
//   initial: {
//     opacity: 0,
//     x: 200,
//   },
//   animate: (id: number) => ({
//     opacity: 1,
//     x: 0,
//     transition: {
//       delay: 0.05 * id,
//     }
//   }),
// }

export function Experience() {
  const { t } = useTranslation("global");

  return (
    <motion.div
      id="experience"
      className="w-full h-full flex flex-col font-suprecot bg-gradient-to-bl from-violet-950 via-black to-default background-animate"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 xs:text-5xl">{t("EXPERIENCE_PAGE.title")}</h1>

      {/*/     <h2 className='font-suprecot flex justify-center text-5xl xs:text-4xl'>{t("EXPERIENCE_PAGE.title3")}</h2>

      //     <div className='flex flex-col justify-center items-center'>
      //       {dataExperience.map((item) => {
      //         const { id, name, local, date } = item;
      //         return (
      //             <motion.div
      //               key={id}
      //               className='flex flex-col items-center w-auto h-auto rounded-md font-sans border-2  my-6 p-2 border-violet-500 hover:border-violet-700 hover:bg-violet-950 hover:bg-opacity-30 ease-in-out duration-200 xs:w-[80%] xs:text-center'
      //               variants={fadeInAnimationVariantsX}
      //               initial="initial"
      //               whileInView="animate"
      //               viewport={{
      //                 once: true,
      //               }}
      //               custom={id}
      //             >
      //               <h3>{name}</h3>
      //               <p className='w-[80%] text-center my-1 text-zinc-300'>{local}</p>
      //               <p className='text-cyan-400'>{date}</p>
      //             </motion.div>
      //         );
      //       })

      //       }
      //     </div>


      //   </motion.div>


      // </div> */}
        <Courses />
    </motion.div>
  );
}
