import { Link } from "react-router-dom";
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
            Hello, my name is William and I am a full stack software engineer. I have about 14
            months of work experience at Pilot.com Inc where I collaborated with team members to
            contribute to a wide variety of features across the stack. I love to learn and I am
            passionate about coding. Right now, I am looking for new opportunities while I hone my
            skills. Check out the{" "}
            <a href="https://www.underdogdevs.org" target="_blank" rel="noreferrer">
              Underdog Devs
            </a>{" "}
            website where I have made major contributions. If you would like to get to know more
            about me please <Link to="/Contact">reach out.</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
