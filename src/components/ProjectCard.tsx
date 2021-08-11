import ProjectDescription from './ProjectDescription';
import FrameProps from './FrameProps';
import Descriptions, { Desc } from './Descriptions';

const ProjectCard = () => {
  return (
    <div className='projects'>
      <h1 className='projectsh1'>Projects</h1>
      {Descriptions.map((item: Desc, index: number) => (
        <>
          <a href={FrameProps[index].src}>
            <h2>{FrameProps[index].title}</h2>
          </a>
          <ProjectDescription {...item} />
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          {/*    {window.innerWidth > 700 && <iframe {...FrameProps[index]}></iframe>} */}
        </>
      ))}
    </div>
  );
};
export default ProjectCard;
