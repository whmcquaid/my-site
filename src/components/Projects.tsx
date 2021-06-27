import ProjectDescription from './ProjectDescription';
import { useState } from 'react';
import Descriptions from './Descriptions';
import FrameProps from './FrameProps';

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
            <h2>React Movie App</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription1(!showDescription1)}
            >
              Description: ...
            </button>
          </div>
          {showDescription1 ? (
            <ProjectDescription {...Descriptions.desc1} />
          ) : null}
          <iframe
            title='React RMDB'
            {...FrameProps.props1}
            {...FrameProps.props1.restOfProps}
          ></iframe>
        </div>
        <div className='project2'>
          <a href='http://whmcquaid.github.io/rock_paper_scissors'>
            <h2>Rock Paper Scissors</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription2(!showDescription2)}
            >
              Description: ...
            </button>
          </div>
          {showDescription2 ? (
            <ProjectDescription {...Descriptions.desc2} />
          ) : null}
          <iframe
            title='Rock Paper Scissors'
            {...FrameProps.props2}
            {...FrameProps.props2.restOfProps}
          ></iframe>
        </div>
        <div className='project3'>
          <a href='http://whmcquaid.github.io/tic-tac-toe'>
            <h2>Tic Tac Toe</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription3(!showDescription3)}
            >
              Description: ...
            </button>
          </div>
          {showDescription3 ? (
            <ProjectDescription {...Descriptions.desc3} />
          ) : null}
          <iframe
            title='Tic Tac Toe'
            {...FrameProps.props3}
            {...FrameProps.props3.restOfProps}
          ></iframe>
        </div>
        <div className='project4'>
          <a href='http://whmcquaid.github.io/etch_a_sketch'>
            <h2>Etch A Sketch</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription4(!showDescription4)}
            >
              Description: ...
            </button>
          </div>
          {showDescription4 ? (
            <ProjectDescription {...Descriptions.desc4} />
          ) : null}
          <iframe
            title='Etch a Sketch'
            {...FrameProps.props4}
            {...FrameProps.props4.restOfProps}
          ></iframe>
        </div>
        <div className='project5'>
          <a href='http://whmcquaid.github.io/library_app'>
            <h2>Library App</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription5(!showDescription5)}
            >
              Description: ...
            </button>
          </div>
          {showDescription5 ? (
            <ProjectDescription {...Descriptions.desc5} />
          ) : null}
          <iframe
            title='Library App'
            {...FrameProps.props5}
            {...FrameProps.props5.restOfProps}
          ></iframe>
        </div>
        <div className='project6'>
          <a href='http://whmcquaid.github.io/todo_list'>
            <h3>Todo List App</h3>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription6(!showDescription6)}
            >
              Description: ...
            </button>
          </div>
          {showDescription6 ? (
            <ProjectDescription {...Descriptions.desc6} />
          ) : null}
          <iframe
            title='Todo List App'
            {...FrameProps.props6}
            {...FrameProps.props6.restOfProps}
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default Projects;
