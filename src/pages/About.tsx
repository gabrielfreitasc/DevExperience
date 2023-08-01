import { ArrowDown } from "../components/ArrowDown";
import { DiLinux, DiJsBadge, DiMysql } from 'react-icons/di'
import { BiLogoTypescript, BiLogoReact, BiLogoDocker, BiLogoTailwindCss } from 'react-icons/bi'
import avatar from '../../public/static/image/avatar.png'


export function About() {
  return (
    <div id="about" className="w-full h-full overflow-hidden bg-gradient-to-tl from-violet-950 via-black to-default font-suprecot background-animate">
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 ">About <h1 className="text-violet-600">Me</h1></h1>

      <div className="border-4 border-violet-900 rounded-full w-32 h-32 mx-auto overflow-hidden mt-10 outline outline-offset-8 outline-2 outline-white">
        <img src={avatar}></img>
      </div>

      <div className="flex flex-col justify-center items-center my-8">
        <h2 className="text-3xl mb-8">Gabriel Freitas</h2>
        <p className="text-base text-center max-w-lg font-sans mb-2">
          Sou natural de Uberlândia, Minas Gerais. Atualmente cursando Gestão da Informação na Universidade Federal de Uberlândia (UFU). Passei um período como oficial do Exército Brasileiro e dedico meus estudos e trabalhos na área
          de desenvolvedor Front-End e Back-End, meu ponto forte é a área de Front-End atualmente, aprimorando os estudos em tecnologias como Typescript, Javascript, Docker, Kubernetes, MySQL, React, TailwindCSS e entre outras.
        </p>
        <span className="gap-2 text-base font-bold font-sans flex items-center bg-default p-2 rounded-lg bg-opacity-40">
          <h3>SKILLS:</h3>
          <DiLinux size={20} />
          <DiJsBadge size={20} />
          <BiLogoTypescript size={26} />
          <BiLogoReact size={26} />
          <BiLogoDocker size={26} />
          <BiLogoTailwindCss size={26} />
          <DiMysql size={25} />
        </span>
      </div>
      <ArrowDown data="experience"/>
    </div>
  );
}
