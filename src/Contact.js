import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { useSound, close, FontAwesomeIcon, faTimes } from "./index";
import { NetlifyForm, Honeypot } from "react-netlify-forms";
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
        <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
          {({ handleChange, success, error }) => (
            <>
              <Honeypot />
              {success && <p>Thanks for contacting us!</p>}
              {error && (
                <p>
                  Sorry, we could not reach our servers. Please try again later.
                </p>
              )}
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="4"
                  onChange={handleChange}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </>
          )}
        </NetlifyForm>
      </section>
    </>
  );
};

export default Contact;
