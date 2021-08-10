import { Desc } from './Descriptions';

export default function ProjectDescription(props: Desc) {
  return (
    <div className='description'>
      <p>
        <strong>Technologies utilized:</strong> {props.tech}
      </p>
      <p>
        <strong>Project Description:</strong> {props.description}
      </p>
    </div>
  );
}
