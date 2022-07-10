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
      <div className="about">
        <Navbar />
        <Language />
        <div className="about__info">
          <div className="about__info__photo">
            <img src={selfPic} alt="" />
          </div>
          <div className="about__info__description">
            <div className="about__info__description--name">Peter Kan</div>
            <div className="about__info__description--job">
              Front-end Developer and Language Educator
            </div>
          </div>
        </div>
        <div className="about__work1">
          <img src={japanPara} alt="" className="about__work1__image" />
          <div className="about__work1__list">
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>Feugiat netus egestas risus hac facilisis.</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
