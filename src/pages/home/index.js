import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import { introdata, texts, meta } from "../../content_option";
import { Link } from "react-router-dom";
import CV from "../../assets/cv.pdf";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.homeimg})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-start ml-2">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio">
                    <div id="button_h" className="ac_btn btn ">
                        {texts.mesprojets}
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                  </Link>
                  <a href={CV} target="_blank" rel="noreferrer">
                    <div id="button_h" className="ac_btn btn">
                      {texts.cv}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </a>
                  <Link to="/contact">
                    <div id="button_p" className="ac_btn btn">
                      {texts.contactmenu}
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <h1 className="fluidz-48 mb-1x">
                  <span>Je suis </span>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
