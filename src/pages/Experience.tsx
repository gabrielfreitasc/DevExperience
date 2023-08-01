import { useEffect, useState } from 'react';
import { GrFormView, GrFormViewHide } from 'react-icons/gr';
import { ArrowDown } from '../components/ArrowDown';

export function Experience() {
  const [isShow, setisShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5173/static/courses.json")
    fetch("https://gabrielfreitasc.github.io/DevExperience/static/courses.json")
      .then((response) => response.json())
      .then(setData);
  })

  if(!data || !data.length) return null;

  return (
    <div id="experience" className="w-full h-full font-suprecot bg-gradient-to-bl from-violet-950 via-black to-default background-animate">
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 ">Experience</h1>
      <div className="grid grid-cols-2 grid-rows-2 mt-5">
        <div className='border-violet-600 h-[430px]'>
          <h2 className="font-suprecot flex justify-center text-5xl">Courses</h2>

          {data.map((item) => {
            const { id, name, link } = item;
            return (
              <span key={id} className="font-sans flex w-[55%] gap-6 ml-10 my-6 p-2 border-l-2 border-violet-500 hover:border-violet-700 hover:bg-zinc-800 ease-in-out duration-300">
                <h3>{name}</h3>
                <a href={link} target='_blank' className="border-2 border-white bg-white rounded-full ease-in-out duration-300 hover:bg-zinc-300 hover:border-zinc-300 transition-all" onMouseEnter={() => setisShow(true)} onMouseLeave={() => setisShow(false)}>
                  {isShow ? (
                    <GrFormView size={20}  />
                  ) : (
                    <GrFormViewHide size={20} />
                  )}
                </a>
              </span>
            );
          })}
        </div>
        <div className='border-l-2 border-violet-600'>
          <h2 className='font-suprecot flex justify-center text-5xl'>Work</h2>

          <div className='flex flex-col items-center w-[45%] rounded-md font-sans border-2 ml-48 my-6 p-2 border-violet-500 hover:border-violet-700 hover:bg-violet-950 hover:bg-opacity-30 ease-in-out duration-200'>
            <h3>Aspirante-a-Oficial do Exército Brasileiro</h3>
            <p>Início: 2023 | Término: 2023</p>
          </div>
        </div>

        <div className='col-span-2 flex justify-center items-center h-[40%]'>
          <ArrowDown data='project' />
        </div>
      </div>
    </div>
  );
}
