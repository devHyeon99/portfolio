import { IoPerson } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaCalendar } from 'react-icons/fa';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { FaPen } from 'react-icons/fa';
import { Label, ProjectCard } from './components/';

function App() {
  return (
    <div>
      <section className='relative h-screen flex flex-col justify-center items-center gap-10  text-white bg-[#1E232D]'>
        <h1 className='absolute top-10 left-10 text-3xl font-extrabold'>
          엄현호 포트폴리오
        </h1>
        <p className='text-center text-4xl leading-loose '>
          안녕하세요, <strong className='text-blue-300'>엄현호</strong>입니다.
          <br />
          항상 배움의 자세를 갖고있는 프론트엔드 개발자 입니다.
        </p>
        <a
          href='#about_me'
          className='border px-4 py-2 rounded-md text-2xl font-semibold hover:bg-white hover:text-[#1E232D]'
          aria-label='엄현호에 대해서 더 알아보기'
        >
          더 알아보기
        </a>
      </section>
      <section
        id='about_me'
        className='h-screen flex flex-col justify-center items-center bg-[#2E3645]'
      >
        <article className='flex flex-1 flex-col w-[70%] text-center'>
          <div className='flex flex-row flex-nowrap gap-5 justify-center'>
            <span className='py-10 text-4xl'>🧑🏻‍💻</span>
            <h2 className='py-10 text-4xl font-extrabold underline-offset-[10px] underline text-white'>
              ABOUT ME
            </h2>
          </div>
          <div className='flex flex-wrap p-10 h-full w-full text-3xl bg-gray-100 text-gray-900 rounded-xl bg-opacity-80'>
            <div className='w-1/3 flex items-center justify-around'>
              <IoPerson size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>엄현호</span>
            </div>
            <div className='w-1/3 flex items-center justify-around'>
              <IoCall size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>
                010-4103-5567
              </span>
            </div>
            <div className='w-1/3 flex items-center justify-around'>
              <MdEmail size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>
                jinung5@gmail.com
              </span>
            </div>
            <div className='w-1/3 flex items-center justify-around'>
              <FaCalendar size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>
                1999.09.26
              </span>
            </div>
            <div className='w-1/3 flex items-center justify-around'>
              <BsFillPersonVcardFill size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>신입</span>
            </div>
            <div className='w-1/3 flex items-center justify-around'>
              <FaPen size={30} color='#1E232D' />
              <span className='text-xl font-semibold w-[250px]'>
                공주대학교 <br />
                <span className='text-xl'>(컴퓨터공학부 컴퓨터공학전공)</span>
              </span>
            </div>
          </div>
        </article>
        <article className='flex flex-1 flex-col w-[70%] text-center'>
          <div className='flex flex-row flex-nowrap gap-5 justify-center'>
            <span className='py-10 text-4xl'>🙋🏻</span>
            <h2 className='py-10 text-4xl font-extrabold underline-offset-[10px] underline text-white'>
              MY SKILLS
            </h2>
          </div>
          <div className='flex flex-col justify-between text-left flex-wrap px-10 mb-10 h-full w-full bg-gray-50 text-gray-900 rounded-xl bg-opacity-80'>
            <div className='flex gap-2 mt-5'>
              <h3 className='text-xl font-bold mr-3 w-[95px]'>Language</h3>
              <Label text='JavaScript' color='yellow' />
              <Label text='TypeScript' color='blue' />
            </div>
            <div className='flex gap-2 mt-5'>
              <h3 className='text-xl font-bold mr-3 w-[95px]'>Frontend</h3>
              <Label text='React' color='blue' />
              <Label text='React-Router' color='red' />
              <Label text='TanStack-Query' color='orange' />
              <Label text='Zustand' color='brown' />
              <Label text='Sass' color='pink' />
              <Label text='Tailwind Css' color='blue' />
            </div>
            <div className='flex gap-2 mt-5'>
              <h3 className='text-xl font-bold mr-3 w-[95px]'>Backend</h3>
              <Label text='PocketBase' color='black' />
              <Label text='MySQL' color='blue' />
            </div>
            <div className='flex gap-2 mt-5 mb-5'>
              <h3 className='text-xl font-bold mr-3 w-[95px]'>ETC</h3>
              <Label text='Git' color='black' />
              <Label text='Netlify' color='green' />
              <Label text='Figma' color='pink' />
            </div>
          </div>
        </article>
      </section>
      <section className='h-screen flex justify-center items-center text-white bg-[#3F495E]'>
        <article className='flex flex-col w-full h-full text-center'>
          <div className='flex flex-row flex-nowrap gap-5 justify-center'>
            <span className='py-10 text-4xl'>📚</span>
            <h2 className='py-10 text-4xl font-extrabold underline-offset-[10px] underline text-white'>
              MY PROJECTS
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-5 px-10'>
            <ProjectCard
              title='My Emotion'
              date='2023.09 ~ 2023.12'
              team={false}
            >
              <ul>
                <span>이런저런 프로젝트입니다.</span>
              </ul>
            </ProjectCard>
            <ProjectCard
              title='My Emotion'
              date='2023.09 ~ 2023.12'
              team={false}
            >
              <ul>
                <span>이런저런 프로젝트입니다.</span>
              </ul>
            </ProjectCard>
            <ProjectCard
              title='My Emotion'
              date='2023.09 ~ 2023.12'
              team={false}
            >
              <ul>
                <span>이런저런 프로젝트입니다.</span>
              </ul>
            </ProjectCard>
            <ProjectCard
              title='My Emotion'
              date='2023.09 ~ 2023.12'
              team={false}
            >
              <ul>
                <span>이런저런 프로젝트입니다.</span>
              </ul>
            </ProjectCard>
          </div>
        </article>
      </section>
      <section className='h-screen flex justify-center items-center text-4xl text-white bg-yellow-500'>
        섹션 4
      </section>
    </div>
  );
}

export default App;
