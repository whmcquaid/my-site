const restOfProps = {
  position: 'absolute',
  height: '400px',
  width: '400px',
};
const props1 = {
  src: 'https://whmcquaid.github.io/React-RMDB/',
  ...restOfProps,
};
const props2 = {
  src: 'https://whmcquaid.github.io/rock_paper_scissors/',
  ...restOfProps,
};
const props3 = {
  src: 'https://whmcquaid.github.io/tic-tac-toe/',
  ...restOfProps,
};
const props4 = {
  src: 'https://whmcquaid.github.io/etch_a_sketch',
  ...restOfProps,
};
const props5 = {
  src: 'https://whmcquaid.github.io/library_app',
  ...restOfProps,
};
const props6 = {
  src: 'https://whmcquaid.github.io/todo_list',
  ...restOfProps,
};

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <h3>React Movie App</h3>
        <h4>JavaScript, React, HTML, CSS</h4>
        <iframe title='React RMDB' {...props1}></iframe>
        <h3>Rock Paper Scissors</h3>
        <h4>JavaScript, React, HTML, CSS</h4>
        <iframe title='Rock Paper Scissors' {...props2}></iframe>
        <h3>Tic Tac Toe</h3>
        <h4>JavaScript, React, HTML, CSS</h4>
        <iframe title='Tic Tac Toe' {...props3}></iframe>
        <h3>Etch A Sketch</h3>
        <h4>JavaScript, HTML, CSS</h4>
        <iframe title='Etch a Sketch' {...props4}></iframe>
        <h3>Library App</h3>
        <h4>JavaScript, HTML, CSS</h4>
        <iframe title='Library App' {...props5}></iframe>
        <h3>Todo List App</h3>
        <h4>TypeScript, React, HTML, CSS</h4>
        <iframe title='Todo List App' {...props6}></iframe>
      </div>
    </>
  );
};
export default Projects;
