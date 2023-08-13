import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

let navs = [
  { id: "home", label: "HEADER.nav1" },
  { id: "about", label: "HEADER.nav2" },
  { id: "experience", label: "HEADER.nav3" },
  { id: "project", label: "HEADER.nav4" }
];

export function NavBarDesktop() {
  const [activeNav, setActiveNav] = useState(navs[0].id);
  const { t } = useTranslation("global");

  return(
    <nav className='mx-6 xs:hidden '>
      <ul className='flex gap-5 justify-around items-center'>
        {navs.map((nav) => {
          const { id, label } = nav;
          return(
            <li key={id}>
              <Link
                activeClass="active" to={id} spy={true} smooth={true} offset={0} duration={500}
                className={`relative transition focus-visible:outline outilne-2 p-2 rounded-full outline-sky-400 hover:animate-pulse duration-200 ease-in-out font-semibold cursor-pointer
                  ${activeNav === id ? "" : "hover:opacity-80"}
                `}
                onClick={() => setActiveNav(id)}
              >
                {activeNav === id && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{duration: 0.3}}
                    className="absolute inset-0 rounded-full bg-violet-600"
                  />
                )}
                <span className="relative z-10">{t(label)}</span>
              </Link>
            </li>
          );
        })
        }
      </ul>
    </nav>
  );
}
