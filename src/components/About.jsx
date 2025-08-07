import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-4/5";
  const skill3 = "w-2/3";

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">
          About Me
        </h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">I'm Gemtessa</h2>
          <p className=" mt-4 lg:mt-2">
          I'm Gemtessa Deksisa, a passionate and dedicated Software Engineering and Business Management 
          student at Haramaya University, currently training at the INSA Cyber Talent Center. With a strong foundation in full-stack development, 
          I enjoy building impactful web and mobile applications that solve real-world problems.
           I have hands-on experience with technologies like React.js,
           Node.js, MongoDB, and Android development using Kotlin.</p>
        </div>

        <div>
          <h2 className=" text-3xl font-semibold ">My Skills</h2>

          <div>
            <SkillCard title="Html" width={skill1} val="95%" />
            <SkillCard title="CSS" width={skill2} val="85%" />
            <SkillCard title="JavaScript" width={skill3} val="70%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
