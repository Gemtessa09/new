import React from "react";

const EducationCard = (props) => {
  return (
    <div className=" flex flex-col lg:flex-row py-4">
      <div className=" w-full lg:w-2/4">
        <h2 className=" font-semibold">{props.title}</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>Jan 2023 - Dec 2027</p>
        </div>
      </div>
      <div>
        <h2 className=" font-semibold mt-2 lg:mt-0">Certificate of web training</h2>
        <p className=" mt-2">
        Educational Background
        I am currently pursuing a dual degree in Software Engineering and Business Management at Haramaya University, Ethiopia. 
        Throughout my academic journey, I have gained strong theoretical and practical knowledge in programming, 
        system design, database management, and entrepreneurship.
         In addition to my university studies, I have actively participated in national tech training programs, 
         including the INSA Cyber Talent Center Summer Camp at AASTU,
          where I received advanced training in cybersecurity and full-stack development.
           I have also earned certificates from Udacity, Google through Eshay, and STEM Power Ethiopia, 
           further strengthening my technical and professional skills.</p>
        <div className=" bg-slate-500 w-full h-0.5 mt-2"></div>
      </div>
    </div>
  );
};

export default EducationCard;
