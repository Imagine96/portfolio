import React from "react";
import { PrevExp } from "@utils/types";
import { MdLink } from "react-icons/md";

interface Props extends PrevExp {
    darkMode: boolean
}

const PreviusExperienceListItem: React.FC<Props> = ({ description, img, name, responabilities, url, darkMode }) => {

    return (
        <div className={`flex flex-col gap-2 ${darkMode ? " " : "text-dark"}`} >
            <h3 className="text-xl capitalize" > {name} </h3>
            <p> {description} </p>
            <ul className="list-disc pl-4" >
                <p className="-ml-4"> Functions </p>
                {responabilities.map(resp => <li className="list-item" key={resp} > {resp} </li>)}
            </ul>
            <a className="underline w-fit rounded-md p-4 bg-dark bg-opacity-[0.85] hover:transition hover:text-red-800 hover:shadow-xl hover:-translate-y-2 flex flex-row items-center gap-1 justify-start text-light" href={url} target="_blank" >
                {"Link"} <MdLink />
                <img className="mx-4 max-w-[100px] max-h-[100px]" src={process.env.PUBLIC_URL + img} alt={name} />
            </a>
        </div>
    )
}

export default PreviusExperienceListItem