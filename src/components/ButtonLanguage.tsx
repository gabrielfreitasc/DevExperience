import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export function ButtonLanguage() {
  const [opened, setOpened] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');
  const flag = language === 'en' ? 'US' : 'BR';

  function handleLanguage(lang: string) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setOpened(!opened);
  }

  return (
    <div className="mt-20">
      <button onClick={() => setOpened(!opened)} className="bg-gradient-to-r from-violet-800 to-purple-800 h-12 w-14 rounded-md uppercase font-bold flex justify-center items-center gap-1 text-[16px] opacity-80 hover:opacity-100 transition-opacity">{flag} {opened === true ? <IoIosArrowDown size={16}/> : <IoIosArrowUp />}</button>
        <div className={`${opened === false ? "opacity-0" : "opacity-100"} flex flex-col w-auto p-2 py-2 text-base text-white bg-gradient-to-r from-violet-800 to-purple-800 list-none text-left border border-zinc-800 bg-zinc-800 rounded shadow`}>
        <span onClick={() => handleLanguage('ptbr')} className="hover:scale-105 hover:zinc-300 ease-in-out duration-300 cursor-pointer">BR</span>
        <span onClick={() => handleLanguage('en')} className="hover:scale-105 hover:zinc-300 ease-in-out duration-300 cursor-pointer">US</span>
        </div>
    </div>
  );
}
