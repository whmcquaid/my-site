type appProps = {
  tech: string;
  description: string;
};
export default function ProjectDescription(props: appProps) {
  return (
    <div className='description'>
      <p>Technologies utilized: {props.tech}</p>
      <p>{props.description}</p>
    </div>
  );
}
