import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants';
import { motion } from "framer-motion";
import { Courses } from '../components/Experience/Courses';
import { useTranslation } from 'react-i18next';

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
      <h1 className="text-7xl uppercase font-burtons pt-20 pb-4 flex justify-center items-center gap-2 xs:text-5xl">{t("EXPERIENCE_PAGE.title")}</h1>
        <Courses />
    </motion.div>
  );
}
