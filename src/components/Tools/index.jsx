import React from "react";
import LogoHtml from "assets/logoHtml.svg";
import Javascript from "assets/logoJavascript.svg";
import Css from "assets/logoCss.svg";
import LogoR from "assets/logoRect.svg";
import Git from "assets/logoGit.svg";
import Mui from "assets/logoMui.png";
import MySql from "assets/logoMySql.png";
import Figma from "assets/logoFigma.svg";
import Bootstrap from "assets/bootstrapIcon.svg";
import { Skill } from "./styles";
import Fade from "react-reveal/Fade";

function Tools() {
  return (
    <>
      <Fade bottom>
        <Skill>
          <div class="grid-item">
            <img src={LogoHtml} alt="" />
            <h1>HTML</h1>
          </div>
          <div class="grid-item">
            <img src={Css} alt="" />
            <h1>CSS</h1>
          </div>
          <div class="grid-item">
            <img src={Javascript} alt="" />
            <h1>JavaScript</h1>
          </div>
          <div class="grid-item">
            <img src={LogoR} alt="" />
            <h1>React Js</h1>
          </div>
          <div class="grid-item">
            <img src={Mui} alt="" />
            <h1>Material Ui</h1>
          </div>
          <div class="grid-item">
            <img style={{ marginTop: "10px" }} src={Bootstrap} alt="" />
            <h1 style={{ marginTop: "15px" }}>Bootstrap</h1>
          </div>
          <div class="grid-item">
            <img src={MySql} alt="" />
            <h1>MySQL</h1>
          </div>
          <div class="grid-item">
            <img src={Git} alt="" />
            <h1>Git</h1>
          </div>
          <div class="grid-item">
            <img src={Figma} alt="" />
            <h1>Figma</h1>
          </div>
        </Skill>
      </Fade>
    </>
  );
}

export default Tools;
