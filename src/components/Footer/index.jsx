import React from "react";
import { Container, LinkProfile, Title, Hr } from "./styles";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <>
      <Container>
        <Fade left>
          <Title id="Contact">Contatos</Title>
        </Fade>
        <Hr />
        <Fade bottom>
          <LinkProfile>
            <div>
              <a href="https://github.com/GabrielH1010" target="blank">
                <AiOutlineGithub />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/gabriel-henrique-de-oliveira-01436b1b4/"
                target="blank"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
            <div>
              <a
                href="http://api.whatsapp.com/send?1=pt_BR&phone=5534998985764"
                target="blank"
              >
                <AiOutlineWhatsApp />
              </a>
            </div>
            <div>
              <a href="mailto:gabrielhdeoliveira17@gmail.com? " target="blank">
                <AiOutlineMail />
              </a>
            </div>
          </LinkProfile>
        </Fade>
        <p class="copyright">
          &copy; Gabriel Henrique - 2022 | Desenvolvido por mim
        </p>
      </Container>
    </>
  );
}

export default Footer;
