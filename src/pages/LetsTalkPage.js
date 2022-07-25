import React from "react";

import { FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import Container from "../components/Container";

const LetsTalkPage = () => {
  return (
    <Container>
      <ul className="social-list">
        <li className="social-list__item">
          {/* <!-- Link o seu email no # --> */}
          <a
            href="mailto:#?Subject=Oi #, eu tenho uma pergunta!"
            className="social-list__link items-center"
            target="_blank"
          >
            <FiMail />
            Email Me
          </a>
        </li>

        <li className="social-list__item">
          {/* <!-- Link seu WhatsApp no # --> */}
          <a
            href="https://wa.me/#/?text=Oi Arthur!"
            className="social-list__link items-center"
            target="_blank"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </li>

        <li className="social-list__item">
          {/* <!-- Link seu Instagram no # --> */}
          <a
            href="https://www.instagram.com/#/"
            className="social-list__link items-center"
            target="_blank"
          >
            <FiInstagram />
            Instagram
          </a>
        </li>
      </ul>
    </Container>
  );
};

export default LetsTalkPage;
