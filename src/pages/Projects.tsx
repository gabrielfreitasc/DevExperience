import { BsGithub } from 'react-icons/bs'
import { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeInAnimationVariants } from '../utils/fadeInAnimationVariants';
import { useTranslation } from 'react-i18next';

import { useGithubAutomatedRepos, StackIcon, IGithubRepos } from 'github-automated-repos/index';

export function Projects() {
  const { t } = useTranslation("global");
  const { dataReposGithub } = useGithubAutomatedRepos()
  const [repository, setRepository] = useState<IGithubRepos[]>([])



  useEffect(() => {
    {/*Put here your github Name*/ }
    fetch('https://api.github.com/users/gabrielfreitasc/repos?sort=created&per_page=999')
      .then(response => response.json())
      .then(data => setRepository(dataReposGithub(data, 'deploy'))); {/*<-- keyWord*/}
  }, [])

  return (
    <motion.div
      id="project"
      className="w-full h-full overflow-hidden bg-gradient-to-bl from-violet-950 via-black to-default font-suprecot background-animate "
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-7xl uppercase font-burtons pt-20 flex justify-center items-center gap-2 xs:text-5xl xs:mt-14">{t("PROJECT_PAGE.title")}</h1>

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

          {repository.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className='flex-none translate-x-[186%] p-4 m-10 mt-20 bg-zinc-800 bg-opacity-70 h-96 w-[20%] rounded-md shadow-default xs:w-[70%] xs:translate-x-[8%] xs:my-10 xs:'>
                  <div>
                      <a href={item.homepage}>
                        <img src={`https://gabrielfreitasc.github.io/DevExperience/static/image/${item.name.toLocaleLowerCase().replace('-', '').replace('.', '').trim()}.png`} alt={item.name} className='-mt-[20%] shadow-l rounded-lg shadow-default hover:scale-105 hover:brightness-75 cursor-pointer ease-in-out duration-300 bg-violet-950'/>
                      </a>
                  </div>

                  <div className='flex flex-col justify-center items-center my-5'>
                    <span className='text-3xl mb-3'>{item.name.replace('-', ' ')}</span>
                    <span className='font-sans font-semibold'>{t("PROJECT_PAGE.tec")}</span>
                    <span className='w-[80%] flex flex-wrap justify-center mt-5 gap-3 items-center'>
                      {item.topics.map((icon) => {
                        return (
                            <StackIcon key={icon} className="stack_icons" iconItem={icon} />
                        )
                      })}
                    </span>
                    {/* <span className='font-sans text-violet-600 text-center'>{tecnology}</span> */}

                    <a href={item.html_url} target='_blank' className='text-2xl mt-5 hover:scale-105 ease-in-out duration-300 border-2 border-violet-800 flex items-center px-4 py-2 gap-3 rounded-md  hover:bg-violet-800 hover:border-violet-800 hover:shadow-light-violet'>
                      {t("PROJECT_PAGE.button")}<BsGithub size={20}/>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
    </motion.div>
  );
}
