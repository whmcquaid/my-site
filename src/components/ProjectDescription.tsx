import { Desc } from './Descriptions';

export default function ProjectDescription(props: Desc) {
  return (
    <div className="description">
      <p>{props.description}</p>
      <p>
        <strong>Technologies utilized:</strong> {props.tech}
      </p>
    </div>
  );
}
