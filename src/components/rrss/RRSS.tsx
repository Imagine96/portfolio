import React from "react";

interface Props {
    darkMode: boolean
}

const RRSS: React.FC<Props> = ({ darkMode }) => {
    return (
        <>
            <a target="_blank" rel="noreferrer" href="https://github.com/Imagine96" >
                <img src={process.env.PUBLIC_URL + (darkMode ? "/img/github-icon-2.svg" : "/img/GitHub-Mark-64px.png")} width={50} alt="github link" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ruben-guedes-732b64219/" >
                <img src={process.env.PUBLIC_URL + (darkMode ? "/img/linkedin.svg" : "/img/linkedinOnwhite.png")} width={darkMode ? 100 : 50} alt="linkedin link" />
            </a>
        </>
    )
}

export default RRSS