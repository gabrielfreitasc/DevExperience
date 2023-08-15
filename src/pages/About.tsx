import { ArrowDown } from "../components/ArrowDown";
import { DiLinux, DiJsBadge, DiMysql } from 'react-icons/di'
import { BiLogoTypescript, BiLogoReact, BiLogoDocker, BiLogoTailwindCss } from 'react-icons/bi'
import { motion } from "framer-motion";
import avatar from '../../public/static/image/avatar.png'

import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants'
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation("global");

  return (
    <motion.div
      id="about"
      className="w-full h-full overflow-hidden bg-gradient-to-tl from-violet-950 via-black to-default font-suprecot background-animate"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-7xl uppercase font-burtons pt-10 flex justify-center items-center gap-2 xs:text-5xl">{t("ABOUT_PAGE.title1")} <h1 className="text-violet-600">{t("ABOUT_PAGE.title2")}</h1></h1>

      <div className="border-4 border-violet-900 rounded-full w-32 h-32 mx-auto overflow-hidden mt-10 outline outline-offset-8 outline-2 outline-white xs:w-24 xs:h-24">
        <img src={avatar}></img>
      </div>

      <div className="flex flex-col justify-center items-center my-8">
        <h2 className="text-3xl mb-8 xs:mb-0">Gabriel Freitas</h2>
        <motion.p
          className="text-base text-center max-w-lg font-sans mb-2 xs:text-xs xs:p-4 xs:mb-0"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          {t("ABOUT_PAGE.description")}
        </motion.p>
        <motion.span
          className="gap-2 text-base font-bold font-sans flex items-center bg-default p-2 rounded-lg bg-opacity-40 xs:-translate-y-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          >
          <h3>SKILLS:</h3>
        <motion.li
          className="flex gap-2 items-center"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{delay: 0.05}}
        >
          <DiLinux size={20} />
          <DiJsBadge size={20} />
          <BiLogoTypescript size={26} />
          <BiLogoReact size={26} />
          <BiLogoDocker size={26} />
          <BiLogoTailwindCss size={26} />
          <DiMysql size={25} />
        </motion.li>

        </motion.span>
      </div>
      <div className="xs:hidden">
        <ArrowDown data="experience"/>
      </div>
    </motion.div>
  );
}
