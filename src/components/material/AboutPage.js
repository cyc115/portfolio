import React from "react";
import profImg from "../../../public/img/profile.jpg";
import Markdown from "react-remarkable";
import "./AboutPage.css";

function AboutPage(props) {
  return (
    <div>
      <div className="about-img-div">
        <img src={profImg} alt={"profile"} className="img-prof-responsive" />
      </div>

      {generateContent()}
    </div>
  );
}

function generateContent() {
  return (
    <div className="about-page-main">
      <p>
        Hi! My name is Mike. Graduated from [McGill](https://www.mcgill.ca), I
        am a security engineer by trade, and a software engineer at heart.
      </p>
      <Markdown>
        For the past year, I have joined Motorola Solutions as a Security
        engineer specialized in application security and Golang development.
        There, I have the pleasure to contribute to projects related to
        container and mobile security.
      </Markdown>
      <Markdown>
        I enjoy learning and building my personal projects while I've
        got time on hand. Recently, I have obtained my [AWS Solution Architect
        Associate
        Certificate](https://aws.amazon.com/certification/certified-solutions-architect-associate/).
        I am also in the process of learning to build deploy and scale cloud
        applications.
      </Markdown>

      <Markdown>
        I enjoy traveling, dancing and building side projects (currently working
        on a react-native app).
      </Markdown>

      <p>
        Moved from China to Montreal, Montreal to New York and New York to
        Chicago. I am seeking an exciting opportunity to advance my career.
      </p>

      <Markdown>
        If you want to hear more about me, check out my [LinkedIn
        profile](https://www.linkedin.com/in/yuechuan-mike-chen-995b9b54/) or
        send me an [email](mailto:yuechuan20@gmail.com).
      </Markdown>
      <Markdown>Chao</Markdown>
    </div>
  );
}

export default AboutPage;
