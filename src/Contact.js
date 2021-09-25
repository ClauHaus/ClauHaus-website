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
    <form action="POST" data-netlify="true">
      <div class="fields">
        <div class="field half">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div class="field half">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div class="field">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="7"
          ></textarea>
        </div>
        <div class="field">
          <input
            type="file"
            name="myfile"
            id="myfile"
            placeholder="Upload File"
            rows="7"
          ></input>
        </div>
        <div class="filed">
          <div data-netlify-recaptcha="true"></div>
        </div>
      </div>
      <ul class="actions">
        <li>
          <input type="submit" value="Send Message" class="button primary" />
        </li>
      </ul>
    </form>
  );
};

export default Contact;
