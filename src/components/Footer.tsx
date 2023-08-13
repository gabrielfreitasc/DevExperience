import logoIcon from '../assets/logo.png'
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation("global");

  return (
    <div className="absolute h-16 w-full text-center flex justify-center items-center bg-violet-950 gap-2">
      <img src={logoIcon} alt="Logo Gabriel Freitas" className='h-12 w-12 hover:scale-110 ease-out duration-300'/>
      <p>{t("FOOTER")}
        <a target="_blank" href="https://github.com/gabrielfreitasc/DevExperience" className="text-violet-500 hover:text-violet-600 ease-out duration-300"> Github</a>.
        Gabriel Freitas © 2023</p>
    </div>
  );
}
