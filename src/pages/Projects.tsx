import { BsGithub } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

export function Projects() {
  const [data, setData] = useState([]);


  useEffect(() => {
    // fetch('http://localhost:5173/static/projects.json')
    fetch('https://gabrielfreitasc.github.io/DevExperience/static/projects.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(!data || !data.length) return null;

  return (
    <div id="project" className="w-full h-full overflow-hidden bg-gradient-to-tl from-violet-950 via-black to-default font-suprecot background-animate">
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 ">Projects</h1>

      <div className='flex justify-evenly items-center'>
      <Swiper
        modules={[EffectCoverflow]}
        effect='coverflow'
        loop
        slidesPerView={1}
        pagination={{clickable:true}}
        navigation
        className='flex justify-center items-center'
        >
          {data.map((item) => {
            const { id, name, tecnology, link, image } = item;
            return (
              <SwiperSlide key={id}>
                <div className='flex-none translate-x-[186%] trans p-4 m-10 mt-20 bg-zinc-800 bg-opacity-70 h-96 w-[20%] rounded-md shadow-default hover:scale-105 ease-in-out duration-300'>
                  <div>
                    <img src={image} alt={name} className='-mt-[20%] rounded-lg shadow-default hover:scale-105 ease-in-out duration-300 bg-violet-950'/>
                  </div>

                  <div className='flex flex-col justify-center items-center my-5'>
                    <span className='text-3xl mb-5'>{name}</span>
                    <span className='font-sans font-semibold'>Technology:</span>
                    <span className='font-sans text-violet-600 text-center'>{tecnology}</span>

                    <a href={link} target='_blank' className='text-2xl mt-10 hover:scale-105 ease-in-out duration-300 border-2 border-violet-800 flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>View Repositore<BsGithub size={20}/></a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
    </div>
  );
}
