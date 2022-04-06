import React from "react";

const Intro: React.FC = () => {
    return (
        <div className="flex flex-row gap-4 px-8 text-light font-light items-center " >
            <img src={process.env.PUBLIC_URL + "/img/ruben.png"} className="rounded-full h-20 " />
            <p>
                I am Rubén, front end developer.<br />
            </p>
        </div>
    )
}

export default Intro