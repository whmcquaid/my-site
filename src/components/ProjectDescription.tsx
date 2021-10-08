import { Desc } from './Descriptions';

export default function ProjectDescription(props: Desc) {
  return (
    <div className="description">
      <p>{props.description}</p>
      <p className="tech">Technologies</p>{' '}
      <p className="techList">{props.tech}</p>
    </div>
  );
}
