/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Container, ContentArea, ModalButton } from "./styles";
import { AiFillGithub } from "react-icons/ai";

const ModalItem = ({ data, setStatus }) => {
  const handleCloseButton = () => {
    setStatus(false);
  };

  const navTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Container>
        <ContentArea>
          <div className="image">
            <h2>{data.title}</h2>
            <img
              src={data.img}
              alt="Imagem representando o logo de cada um dos meus projetos"
            />
          </div>
          <div className="description">
            <h2>{data.title}</h2>
            <h3>Tecnologias:</h3>
            <p> {data.tecnonolgyDescription}</p>
            <h3>Descrição:</h3>
            <p> {data.description}</p>
            {data.url !== null && (
              <div className="github" onClick={() => navTo(data.url)}>
                <AiFillGithub size={20} />
                <a href="" target="">
                  Repositório
                </a>
              </div>
            )}
          </div>
        </ContentArea>
        <ContentArea>
          <ModalButton>
            <button onClick={handleCloseButton}>X</button>
          </ModalButton>
        </ContentArea>
      </Container>
    </>
  );
};

export default ModalItem;
