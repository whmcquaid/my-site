import ProjectDescription from './ProjectDescription';
import FrameProps from './FrameProps';
import Descriptions, { Desc } from './Descriptions';

const ProjectCard = () => {
  return (
    <>
      {Descriptions.map((item: Desc, index: number) => (
        <div className='projects'>
          <a href={FrameProps[index].src}>
            <h2>{FrameProps[index].title}</h2>
          </a>
          <ProjectDescription {...item} />
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          {window.innerWidth > 700 && <iframe {...FrameProps[index]}></iframe>}
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
