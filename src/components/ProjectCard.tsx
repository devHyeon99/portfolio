import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  team: boolean;
  children: ReactNode;
}

const ProjectCard = ({ title, date, team, children }: ProjectCardProps) => {
  return (
    <div className='flex flex-col p-4 bg-gray-100 bg-opacity-80 rounded-xl'>
      <div className='flex gap-2'>
        <span className='w-fit px-2 py-1 items-start text-xl font-bold bg-[#1E232D] text-white rounded-lg'>
          {title}
        </span>
        <span className='w-fit px-2 py-1 items-start text-xl font-bold bg-blue-400 text-white rounded-lg'>
          {team ? '팀 프로젝트' : '개인 프로젝트'}
        </span>
      </div>
      <span className='w-fit py-2 items-start text-lg font-semibold text-gray-700'>
        {date}
      </span>
      <div className='h-[1px] w-full bg-gray-500'></div>
      <div>{children}</div>
    </div>
  );
};

export default ProjectCard;
