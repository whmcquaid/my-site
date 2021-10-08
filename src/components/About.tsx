import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="left-col">
          <img
            id="headshot"
            src="https://i.ibb.co/s9t0QSn/Optimized-Head-Shot.jpg"
            alt="Me: William McQuaid"
          />
        </div>
        <div className="right-col">
          <p id="about">
            Hello, my name is William and I am a software engineer. I love to
            learn and I am passionate about coding. Right now, I am blessed to
            be part of the first cohort of Project Underdog. I receive a monthly
            stipend from the organization 'Underdog Devs' while I focus full
            time on honing my skills as an engineer. Check out the{' '}
            <a
              href="https://www.underdogdevs.org"
              target="_blank"
              rel="noreferrer"
            >
              Underdog Devs
            </a>{' '}
            website where I have made major contributions. I am working on
            building a better future for my family by making my dream become a
            reality. If you would like to get to know more about me please{' '}
            <Link to="/Contact">reach out.</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
