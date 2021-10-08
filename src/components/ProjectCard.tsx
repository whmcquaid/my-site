import ProjectDescription from './ProjectDescription';
import FrameProps from './FrameProps';
import Descriptions, { Desc } from './Descriptions';

const ProjectCard = () => {
  return (
    <div>
      <h1 className="projectsh1">Projects</h1>
      <div className="projects">
        {Descriptions.map((item: Desc, index: number) => (
          <div className="card">
            <h2 className="cardTitle">
              <a href={FrameProps[index].src}>{FrameProps[index].title}</a>
            </h2>
            <ProjectDescription {...item} />
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            {/*    {window.innerWidth > 700 && <iframe {...FrameProps[index]}></iframe>} */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectCard;
