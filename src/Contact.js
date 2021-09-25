import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { useSound, close, FontAwesomeIcon, faTimes } from "./index";
// import axios from "axios";

// const API_PATH = "http://localhost:3000/clauhaus/api/index.php";

const Contact = () => {
  const { language, closeContact, closingContact, sound, setFooter } =
    useGlobalContext();

  const [formInformation, setFormInformation] = useState({
    fullName: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInformation({ ...formInformation, [name]: value });
  };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   axios({
  //     method: "post",
  //     url: `${API_PATH}`,
  //     headers: { "content-type": "application/json" },
  //     // data: this.state,
  //     data: formInformation,
  //   })
  //     .then((result) => {
  //       // this.setState
  //       formInformation({
  //         mailSent: result.data.sent,
  //       });
  //     })
  //     .catch((error) => formInformation.error);
  // };

  const [playClose] = useSound(close, { volume: 0.5 });

  const closeSound = () => {
    closeContact();
    playClose();
    setFooter("");
  };

  return (
    <>
      <section id="contact" className={`section-contact ${closingContact}`}>
        {language === "english" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">Contact</h3>
              <button
                className="btn-close-left"
                onClick={() => (sound ? closeSound() : closeContact())}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <section>
              <form
                className="form"
                // action="mailto:claudio.aime32@gmail.com"
                // enctype="multipart/form-data"
                name="contact"
                method="POST"
                data-netlify="true"
                // action="/action_page.php"
                // onSubmit={handleFormSubmit}
              >
                <label>
                  <input
                    className="form-items"
                    type="text"
                    name="name"
                    // value={formInformation.fullName}
                    // onChange={handleChange}
                    // id="fullName"
                    placeholder="Enter your name"
                    required
                  />
                </label>
                <label>
                  <input
                    className="form-items"
                    type="email"
                    name="email"
                    // value={formInformation.email}
                    // onChange={handleChange}
                    // id="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <textarea
                  className="form-items"
                  name="message"
                  // value={formInformation.message}
                  // onChange={handleChange}
                  // id="message"
                  rows="10"
                  placeholder="Enter your message..."
                  required
                ></textarea>
                <div data-netlify-recaptcha="true"></div>
                <input type="submit" value="Send" className="form-btn"></input>
              </form>
            </section>
          </>
        )}
        {language === "spanish" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">Contacto</h3>
              <button
                className="btn-close-left"
                onClick={() => (sound ? closeSound() : closeContact())}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <section>
              <form
                className="form"
                // action="mailto:claudio.aime32@gmail.com"
                // enctype="multipart/form-data"
                name="contact"
                action="POST"
                data-netlify="true"
                // action="/action_page.php"
                // onSubmit={handleFormSubmit}
              >
                <label>
                  <input
                    className="form-items"
                    type="text"
                    name="name"
                    // value={formInformation.fullName}
                    // onChange={handleChange}
                    // id="fullName"
                    placeholder="Introduce tu nombre"
                    required
                  />
                </label>
                <label>
                  <input
                    className="form-items"
                    type="email"
                    name="email"
                    // value={formInformation.email}
                    // onChange={handleChange}
                    // id="email"
                    placeholder="Introduce tu email"
                    required
                  />
                </label>
                <textarea
                  className="form-items"
                  name="message"
                  // value={formInformation.message}
                  // onChange={handleChange}
                  // id="message"
                  rows="10"
                  placeholder="Introduce tu mensaje..."
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Enviar"
                  className="form-btn"
                ></input>
              </form>
            </section>
          </>
        )}
        {language === "german" && (
          <>
            <div className="header-about">
              <h3 className="header-subtitle">Kontakt</h3>
              <button
                className="btn-close-left"
                onClick={() => (sound ? closeSound() : closeContact())}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="breaker"></div>
            <section>
              <form
                className="form"
                // action="mailto:claudio.aime32@gmail.com"
                // enctype="multipart/form-data"
                name="contact"
                action="POST"
                data-netlify="true"
                // action="/action_page.php"
                // onSubmit={handleFormSubmit}
              >
                <label>
                  <input
                    className="form-items"
                    type="text"
                    name="name"
                    // value={formInformation.fullName}
                    // onChange={handleChange}
                    id="fullName"
                    placeholder="Ihren Namen eingeben"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <input
                    className="form-items"
                    type="email"
                    name="email"
                    // value={formInformation.email}
                    // onChange={handleChange}
                    // id="email"
                    placeholder="Ihren Email eingeben"
                    required
                  />
                </label>
                <textarea
                  className="form-items"
                  name="message"
                  // value={formInformation.message}
                  // onChange={handleChange}
                  // id="message"
                  rows="10"
                  placeholder="Ihre Nachricht eingeben..."
                  required
                ></textarea>
                <input
                  type="submit"
                  value="Senden"
                  className="form-btn"
                ></input>
              </form>
            </section>
          </>
        )}
      </section>
    </>
  );
};

export default Contact;
