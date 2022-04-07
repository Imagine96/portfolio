import React from "react";
import Data from "./content.json"


interface Props {
  darkMode: boolean;
  eng: boolean
}

const About: React.FC<Props> = ({ darkMode, eng }) => {

  return (
    <div
      className={`${darkMode ? "dark_scroll" : "light_scroll"
        } intro_opacity relative flex flex-col h-full overflow-y-auto gap-4 pb-8 items-center pt-20 mb-20 w-full`}
    >
      <h1
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } text-3xl mb-4 text-left mx-auto w-[70%]`}
      >
        {Data[eng ? "eng" : "esp"].title}
      </h1>
      <p
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } w-[70%]`}
      >
        <span className="text-lg font-semibold"> {Data[eng ? "eng" : "esp"].my_part.title} </span> <br />
        {Data[eng ? "eng" : "esp"].my_part.content}
        <br /> <br />
        <span className="text-lg font-semibold">{Data[eng ? "eng" : "esp"].how.title} </span> <br />
        {Data[eng ? "eng" : "esp"].how.content}
        <br /> <br />
      </p>

      <div className="w-[70%] space-y-8">
        <ul
          className={`${darkMode ? "text-darkMode" : "text-dark"
            } flex gap-1 flex-col list-disc pl-10`}
        >
          <span className="text-lg -ml-8 font-semibold">Skills</span>
          {
            Data[eng ? "eng" : "esp"].skills.map(skill => <li key={skill} className="list-item">{skill}</li>)
          }
        </ul>
        <ul
          className={`${darkMode ? "text-darkMode" : "text-dark"
            } flex flex-col list-disc h-full pl-10`}
        >
          <span className="text-lg -ml-8 font-semibold">Stack</span>
          <div className="flex w-full h-full flex-row relative gap-16 pt-1">
            <div className="flex flex-col items-start">
              <li className="list-item">HTML5</li>
              <li className="list-item">CSS3</li>
              <li className="list-item">JS</li>
              <li className="list-item">NodeJS</li>
              <li className="list-item">Git</li>
            </div>
            <div className="flex flex-col items-start">
              <li className="list-item">TS</li>
              <li className="list-item">React</li>
              <li className="list-item">TailwindCss</li>
              <li className="list-item">Firebase</li>
              <li className="list-item">MongoDB</li>
            </div>
          </div>
        </ul>
      </div>

      <p
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } w-[70%] mt-6`}
      >
        <span className="text-lg font-semibold">{Data[eng ? "eng" : "esp"].about_me.title}</span> <br />
        {Data[eng ? "eng" : "esp"].about_me.content}
      </p>
    </div>
  );
};

export default About;
