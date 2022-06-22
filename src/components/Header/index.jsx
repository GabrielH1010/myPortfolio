import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  DrawerBody,
  Container,
  Bottom,
  ContainerArea,
  HeaderArea,
} from "./styles";
import Fade from "react-reveal/Fade";
import tag from "assets/tag.svg";
import { primary, white } from "styles/colorProvider";
import logo from "assets/logo.png";

function Header() {
  const [open, setOpen] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      scrollPadding: "50px",
      behavior: "smooth",
    });
  };

  const openMenu = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setOpen({ ...open, [anchor]: open });
  };

  const Menu = (anchor) => (
    <Fade top>
      <DrawerBody
        onClick={openMenu(anchor, false)}
        onKeyDown={openMenu(anchor, false)}
      >
        <Container>
          <div className="container">
            <div className="menu">
              <h3 onClick={() => scrollTo("Projects")}>MEUS PROJETOS</h3>
              <h3 onClick={() => scrollTo("Tools")}>FERRAMENTAS</h3>
              <h3 onClick={() => scrollTo("Experience")}>EXP. PROFISSIONAL</h3>
              <h3 onClick={() => scrollTo("About")}>SOBRE MIM</h3>
              <h3 onClick={() => scrollTo("Contact")}>CONTATOS</h3>
            </div>
            <div className="image">
              <img
                src={tag}
                alt="Uma imagem que é o significado de uma tag usada na linguagem de marcação HTML com a cor no puxada para o azul claro"
              />
            </div>
          </div>
          <Bottom>
            <button onClick={openMenu(anchor, false)}>X</button>
          </Bottom>
        </Container>
      </DrawerBody>
    </Fade>
  );

  return (
    <ContainerArea>
      <HeaderArea>
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon
              style={{ cursor: "pointer", marginLeft: "15px", color: "white" }}
              onMouseOver={({ target }) => (target.style.color = primary)}
              onMouseOut={({ target }) => (target.style.color = white)}
              onClick={openMenu(anchor, true)}
            />

            <Drawer
              anchor={anchor}
              open={open[anchor]}
              onClose={openMenu(anchor, false)}
            >
              {Menu(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </HeaderArea>
      <img
        src={logo}
        alt="Logotipo formado por um circulo grande de fundo no tom de azul claro e sobrepondo ele uma escrita com fonte maior TI em branco e abaixo dessa logo tem o meu nome Gabriel Henrique"
      />
    </ContainerArea>
  );
}

export default Header;
