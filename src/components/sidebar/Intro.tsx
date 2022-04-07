import React from "react";

interface Props {
    eng: boolean
}

const Intro: React.FC<Props> = ({ eng }) => {
    return (
        <div className="flex flex-row gap-4 px-8 text-light font-light items-center " >
            <img src={process.env.PUBLIC_URL + "/img/ruben.png"} alt="profile picture" className="rounded-full h-20 " />
            <p className="w-[60%]" >
                {eng ? "I am Rubén, front end developer." : "Hola soy Rubén, desarrollador de front end"}<br />
            </p>
        </div>
    )
}

export default Intro