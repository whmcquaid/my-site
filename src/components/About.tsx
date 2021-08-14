import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='left-col'>
          <img
            id='headshot'
            src='https://i.ibb.co/s9t0QSn/Optimized-Head-Shot.jpg'
            alt='Me: William McQuaid'
          />
        </div>
        <div className='right-col'>
          <p id='about'>
            Hello, my name is William and I am a full stack developer. I love to
            learn and I am passionate about coding. Right now, I work a
            full-time job cleaning, and repairing pools. But not for long! Given
            the opportunity, I would love to work with a team of developers in a
            collaborative manner. I have always been a very curious person. Part
            of the reason that I really enjoy software delelopment is that I
            never stop learning. Many times I have come across unfamiliar
            problems and I find them intriguing. I may not know how to solve a
            particular problem at this moment, but I can confidently say that I
            will figure it out. I really enjoy going down the rabbit hole that
            is often part of the problem solving process, and learning something
            brand new that I get to try out. My persistance is not easily swayed
            so I can be found scouring MDN or stack overflow with a whole
            plethora of browser tabs open until said problem is dealt with. The
            gratification I get from solving problems with code is one of my
            driving forces. If you would like to get to know more about me
            please <Link to='/Contact'>reach out.</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
