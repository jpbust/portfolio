import React from "react";

export const AboutMe = () => {
  return (
    <div className="aboutMeContainer">
      <img
        src="https://res.cloudinary.com/jpbust/image/upload/v1651495889/portfolio/profile_pic_h1zruv.jpg"
        alt="juan pablo profile picture"
        className="aboutMePicture"
      ></img>
      <div>
        <p className="aboutMeIntro">
          I'm Juan Pablo, a Full-Stack Software Developer working for{" "}
          <a href="https://www.thryv.com">Thryv</a> as Front-End Web Developer
          for the payments platform (
          <a href="https://www.thryv.com/features/thryvpay/">Thryv pay</a>)
          remotely in the USA.{" "}
        </p>{" "}
        <p>
          I've spent my early professional career working the business side of
          International logistics and Supply Chain and later decided to
          transition into software because of my never-ending passion of
          creating.
        </p>
        <p>
          These days I spend my time researching new frameworks, improving my
          Javascript knowledge and coding.
        </p>
        <p>
          Outside of the office I'm a full-time dad of two girls and two dogs
          and also, a Crossfit enthusiast among other passion I pursue.
        </p>
      </div>
    </div>
  );
};
