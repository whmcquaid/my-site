type appProps = {
  description: string;
};
export default function ProjectDescription(props: appProps) {
  return (
    <div className='description'>
      <p>{props.description}</p>
    </div>
  );
}
