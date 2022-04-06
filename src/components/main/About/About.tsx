import React from "react";
import { ContentSections } from "@utils/types"

interface Props {
  darkMode: boolean;
}

const About: React.FC<Props> = ({ darkMode }) => {

  return (
    <div
      className={`${darkMode ? "dark_scroll" : "light_scroll"
        } intro_opacity relative flex flex-col h-full overflow-y-auto gap-4 pb-8 items-center pt-20 mb-20 w-full`}
    >
      <h1
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } text-3xl mb-4 text-left mx-auto w-[70%]`}
      >
        About
      </h1>
      <p
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } w-[70%]`}
      >
        <span className="text-lg font-semibold">My part?</span> <br />
        It is to bring ideas and designs to the internet in the form of
        handcrafted websites and webapps because I see in it more than an
        essential business tool for sales and marketing, I see a form of
        expression not just for the business behind it, but also for the
        designer who dreams it and the developer who conceives it.
        <br /> <br />
        <span className="text-lg font-semibold">How?</span> <br />
        I specialize in building user interfaces and client-side
        functionalities. For that I manage html and different css and js tools
        and frameworks, which ensures greater scalability and customization even
        after the final product is delivered.
        <br /> <br />
      </p>

      <div className="w-[70%] space-y-8">
        <ul
          className={`${darkMode ? "text-darkMode" : "text-dark"
            } flex gap-1 flex-col list-disc pl-10`}
        >
          <span className="text-lg -ml-8 font-semibold">Skills</span>
          <li className="list-item">Team player</li>
          <li className="list-item">Problem solving</li>
          <li className="list-item">Critical thinking</li>
          <li className="list-item">Fast learner</li>
          <li className="list-item">UI/UX essentials</li>
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
        <span className="text-lg font-semibold">Who am I?</span> <br />
        Hello, my name is Rubén, js developer.
        <br />
        I am a calm person but very communicative in confidence.
        <br /> I value logic, camaraderie and experimentation, always happy to
        try some new technology and eager to learn. I am a fast learner,
        diligent and hardworking, trying to improve a little every day.
      </p>
    </div>
  );
};

export default About;
