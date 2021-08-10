type appProps = {
  tech: string;
  description: string;
};
export default function ProjectDescription(props: appProps) {
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
