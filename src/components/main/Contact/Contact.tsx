import React from "react";
import useForm from "../../../hooks/useForm";
import RRSS from "../../rrss/RRSS";
import Button from "../../button/Button";

interface Props {
  darkMode: boolean;
  eng: boolean
}

const Contact: React.FC<Props> = ({ darkMode, eng }) => {
  const {
    formState,
    submitHandler,
    updateFormDataHandler,
  } = useForm();

  return (
    <form
      onSubmit={submitHandler}
    >
      <div
        className={`${darkMode ? "dark_scroll" : "light_scroll text-dark"
          } intro_opacity relative flex flex-col max-h-screen overflow-y-scroll gap-4 py-10 items-center min-h-screen w-full text-light`}
      >
        <h1
          className={`${darkMode ? "text-darkMode" : "text-dark"
            } text-3xl text-left mx-auto w-[70%]`}
        >
          {eng ? "Contact" : "Contacto"}
        </h1>
        <div className="w-[70%] flex flex-col gap-4" >
          <label htmlFor="name"> {eng ? "Your Name" : "Tu nombre"} </label>
          <input
            className="p-2 text-dark"
            onChange={(e) => updateFormDataHandler("name", e)}
            name="name"
            type="text"
            minLength={4}
            required={true}
            value={formState.name}
            placeholder="Your name"
          />
          <label htmlFor="email"> {eng ? "Your Email" : "Tu email"} </label>
          <input
            className="p-2 text-dark"
            onChange={(e) => updateFormDataHandler("email", e)}
            name="email"
            type="email"
            required={true}
            value={formState.email}
            placeholder="Your email"
          />
          <label htmlFor="message"> {eng ? "Your Message" : "Tu mensaje"} </label>
          <textarea
            className="p-2 text-dark"
            rows={5}
            required={true}
            onChange={(e) => updateFormDataHandler("message", e)}
            name="message"
            placeholder="Your message"
          />
          <Button type="submit" >
            {eng ? "Submit" : "Enviar"}
          </Button>
          <Button type="reset" >
            {eng ? "Reset" : "Resetear"}
          </Button>
        </div>
        <div className="w-[70%] flex flex-col gap-8 items-center">
          <h3
            className={`${darkMode ? "text-darkMode" : "text-dark"
              } text-xl mt-10 text-center w-[80%]`}
          >
            {eng ? "You can also find me in:" : "También puedes contactar:"}
          </h3>
          <div className="flex flex-row justify-center gap-16 items-center" >
            <RRSS darkMode={darkMode} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;