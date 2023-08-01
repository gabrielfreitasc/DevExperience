import { Link } from 'react-scroll'
import { BsArrowDownCircleFill } from 'react-icons/bs';

type IdPage = {
  data: string
}

export function ArrowDown( {data}: IdPage ) {
  return (
    <div className='right-[720px] flex items-center justify-center animate-bounce animate-infinite animate-ease-linear animate-normal hover:cursor-pointer hover:text-zinc-300 duration-200'>
      <Link
        activeClass="active" to={data} spy={true} smooth={true} offset={50} duration={500}
      >
        <BsArrowDownCircleFill size={40} />
      </Link>
    </div>
  );
}
