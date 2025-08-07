// import React from "react";
import img from "../assets/img/gemtessaphoto.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm GEMTESSA DEKSISA TOLERA
          <span className=" text-brightColor"> full-Stack </span>
          Developer
        </h1>
        <p>
        About Me
I'm Gemtessa Deksisa, a passionate and dedicated Software Engineering 
and Business Management student at Haramaya University, 
currently training at the INSA Cyber Talent Center. 
With a strong foundation in full-stack development, 
I enjoy building impactful web and mobile applications that solve real-world problems.
 I have hands-on experience with technologies like React.js, Node.js, MongoDB,
  and Android development using Kotlin. I’ve received multiple certificates from reputable institutions such as Udacity, 
  Google, and STEM Power Ethiopia. Driven by continuous learning, 
  I’m committed to using technology to improve lives and contribute meaningfully to the tech community in Ethiopia and beyond.


        </p>
        <Button title="HIRE ME" />
      </div>
      <div className=" mt-20">
        <img width={570} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
