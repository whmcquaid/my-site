import ProjectDescription from './ProjectDescription';
import { useState } from 'react';
import Descriptions from './Descriptions';

const restOfProps = {
  position: 'absolute',
  height: '365px',
  width: '365px',
  border: '8px solid silver',
  paddingBottom: '25px',
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
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);
  const [showDescription5, setShowDescription5] = useState(false);
  const [showDescription6, setShowDescription6] = useState(false);
  return (
    <>
      <div className='projects'>
        <div className='project1'>
          <a href='http://whmcquaid.github.io/React-RMDB/'>
            <h3>React Movie App</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription1(!showDescription1)}
              />
            </form>
            {showDescription1 ? (
              <ProjectDescription {...Descriptions.desc1} />
            ) : null}
            <iframe title='React RMDB' {...props1}></iframe>
          </a>
        </div>
        <div className='project2'>
          <a href='http://whmcquaid.github.io/rock_paper_scissors'>
            <h3>Rock Paper Scissors</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription2(!showDescription2)}
              />
            </form>
            {showDescription2 ? (
              <ProjectDescription {...Descriptions.desc2} />
            ) : null}
            <iframe title='Rock Paper Scissors' {...props2}></iframe>
          </a>
        </div>
        <div className='project3'>
          <a href='http://whmcquaid.github.io/tic-tac-toe'>
            <h3>Tic Tac Toe</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription3(!showDescription3)}
              />
            </form>
            {showDescription3 ? (
              <ProjectDescription {...Descriptions.desc3} />
            ) : null}
            <iframe title='Tic Tac Toe' {...props3}></iframe>
          </a>
        </div>
        <div className='project4'>
          <a href='http://whmcquaid.github.io/etch_a_sketch'>
            <h3>Etch A Sketch</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription4(!showDescription4)}
              />
            </form>
            {showDescription4 ? (
              <ProjectDescription {...Descriptions.desc4} />
            ) : null}
            <iframe title='Etch a Sketch' {...props4}></iframe>
          </a>
        </div>
        <div className='project5'>
          <a href='http://whmcquaid.github.io/library_app'>
            <h3>Library App</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription5(!showDescription5)}
              />
            </form>
            {showDescription5 ? (
              <ProjectDescription {...Descriptions.desc5} />
            ) : null}
            <iframe title='Library App' {...props5}></iframe>
          </a>
        </div>
        <div className='project6'>
          <a href='http://whmcquaid.github.io/todo_list'>
            <h3>Todo List App</h3>
            <form>
              <label className='description-label' htmlFor='description-input'>
                Description:
              </label>
              <input
                type='checkbox'
                onChange={() => setShowDescription6(!showDescription6)}
              />
            </form>
            {showDescription6 ? (
              <ProjectDescription {...Descriptions.desc6} />
            ) : null}
            <iframe title='Todo List App' {...props6}></iframe>
          </a>
        </div>
      </div>
    </>
  );
};
export default Projects;
