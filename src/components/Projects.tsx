/* eslint-disable jsx-a11y/iframe-has-title */
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
  const [showDescription7, setShowDescription7] = useState(false);
  return (
    <>
      <div className='projects'>
        <div
          className='project1'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
          <a href='http://whmcquaid.github.io/React-RMDB/'>
            <h2>React Movie App</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription1(!showDescription1)}
            >
              Description:...
            </button>
          </div>
          {showDescription1 ? (
            <ProjectDescription {...Descriptions['1']} />
          ) : null}
          <iframe {...FrameProps[0]}></iframe>
        </div>
        <div
          className='project2'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
          <a href='https://new-calc-seven.vercel.app/'>
            <h2>React Context Calculator</h2>
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
            <ProjectDescription {...Descriptions['2']} />
          ) : null}
          <iframe {...FrameProps[1]}></iframe>
        </div>
        <div
          className='project3'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
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
            <ProjectDescription {...Descriptions['3']} />
          ) : null}
          <iframe {...FrameProps[2]}></iframe>
        </div>
        <div
          className='project4'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
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
            <ProjectDescription {...Descriptions['4']} />
          ) : null}
          <iframe {...FrameProps[3]}></iframe>
        </div>
        <div
          className='project5'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
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
            <ProjectDescription {...Descriptions['5']} />
          ) : null}
          <iframe {...FrameProps[4]}></iframe>
        </div>
        <div
          className='project6'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
          <a href='http://whmcquaid.github.io/todo_list'>
            <h2>Todo List App</h2>
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
            <ProjectDescription {...Descriptions['6']} />
          ) : null}
          <iframe {...FrameProps[5]}></iframe>
        </div>
        <div
          className='project7'
          style={{
            width: '98%',
            height: '500px',
            border: '2px solid silver',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '15px',
          }}
        >
          <a href='https://whmcquaid.github.io/rock_paper_scissors/'>
            <h2>Rock Paper Scissors</h2>
          </a>
          <div>
            <button
              className='desc-button'
              onClick={() => setShowDescription7(!showDescription7)}
            >
              Description: ...
            </button>
          </div>
          {showDescription7 ? (
            <ProjectDescription {...Descriptions['7']} />
          ) : null}
          <iframe {...FrameProps[6]}></iframe>
        </div>
      </div>
    </>
  );
};
export default Projects;
