import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown } from 'react-icons/io'
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export function ButtonLanguage() {
  const [opened, setOpened] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  let flag = language === 'en' && 'US' || language === 'ptbr' && 'BR' || language === 'es' && 'ES';

  function handleLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setOpened(!opened);
  }

  const optionLanguage = [
    { id: 1, name: 'en', value: 'US'},
    { id: 2, name: 'ptbr', value: 'BR'},
    { id: 3, name: 'es', value: 'ES'}
  ]

  return (
    <motion.div
      initial={false}
      animate={opened ? 'open' : 'closed'}
      className="mt-[95px] xs:ml-10"
    >
      <motion.button
        onClick={() => setOpened(!opened)}
        className="bg-gradient-to-r from-violet-800 to-purple-800 h-12 w-14 rounded-md uppercase font-bold flex justify-center items-center gap-1 text-[16px] opacity-80 hover:opacity-100 transition-opacity"
        whileTap={{ scale: 0.97 }}
      >
        {flag}
        <motion.p
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
          style={{ originY: 0.55 }}
        >
          <IoIosArrowDown size={16}/>
        </motion.p>
      </motion.button>

        <motion.div
          className={`flex flex-col w-auto p-2 py-2 text-base text-white bg-gradient-to-r from-violet-800 to-purple-800 list-none text-left border border-zinc-800 bg-zinc-800 rounded shadow`}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: opened ? "auto" : "none" }}
        >

        {optionLanguage.map(Optlanguage => {
         const { id, name, value } = Optlanguage
          return (
            <motion.span key={id} variants={itemVariants} whileHover={{ scale: 1.05 }} onClick={() => handleLanguage(name)} className="hover:text-zinc-200 ease-in-out duration-300 cursor-pointer">{value}</motion.span>
          );
        })}

        </motion.div>
    </motion.div>
  );
}
