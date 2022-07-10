import React from "react";
import Language from "../../components/Language/Language";
import Navbar from "../../components/Navbar/Navbar";
import { loading } from "./../../functions/loading";
import "./About.scss";
import selfPic from "../../images/personal-photo.jpg";
import japanPara from "../../images/peter-japan-para.jpg";

type Props = {};

export default function About({}: Props) {
  loading(0);

  return (
    <>
      <Navbar />
      <Language />
      <div className="about__info">
        <div className="about__info__greeting">
          <p>Greetings, I'm Peter Kan</p>
        </div>
        <div className="about__info__experience">
          <p className="about__info__experience--title">Expreiences</p>
          <div className="about__info__experience--list">
            <p className="about__info__experience--item">
              Li-Ion battery pack project manager
            </p>
            <p className="about__info__experience--item">
              Renewable energy project assistant
            </p>
            <p className="about__info__experience--item">
              Freelance front-end developer/desinger
            </p>
            <p className="about__info__experience--item">
              Mandarin/Japanese/English translater/teacher
            </p>
          </div>
        </div>
        <div className="about__info__skills">
          <p className="about__info__skills--title">Skills</p>
          <div className="about__info__skills--list">
            <p className="about__info__skills--item">
            Japanese - Capable of business communication
            </p>
            <p className="about__info__skills--item">
            English - Capable of business communication
            </p>
            <p className="about__info__skills--item">
            Web-dev - Capable of designing and building websites
            </p>
            <p className="about__info__skills--item">
            Project Managing - Good at communication and scheduling
            </p>
          </div>
        </div>
        <div className="about__info__photo">
          <img src={selfPic} alt="" />
        </div>
      </div>
      <div className="about__work1">
        <img src={japanPara} alt="" className="about__work1__image" />
        <div className="about__work1__list">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <p>Feugiat netus egestas risus hac facilisis.</p>
        </div>
      </div>
    </>
  );
}
