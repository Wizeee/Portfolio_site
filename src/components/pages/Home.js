import React, { Component } from "react";
import Navigation from "./header/Navigation";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Home extends Component {
  render() {
    return (
      <div className="page home-page">
        <header>
          <Navigation />
          <div className="masthead">
            <h2>Humberto Messeguer</h2>
            <h1>Web Design & Development graduate</h1>
          </div>
        </header>
        <section className="section bg-light text-center text-sm-left">
          <div className="container">
            <div className="row">
              <div className="col-12 py-5">
                <center>
                  <h2 className="pb-3">Who am I?</h2>
                  <p>
                    <b>Humberto Messeguer</b> currently attends the University
                    of Central Florida studying Web Design and focusing on the
                    field of Development. He enjoys studying topics such as
                    Information Technology, Interactive media, Gaming, Music,
                    Minimalism, Research and more.
                  </p>
                  <p>
                    In his free time, he may be caught reading, going to his
                    favorite coffee shop, spending time with his family, coding,
                    or playing his favorite game which currently is: World of
                    Warcraft.
                  </p>
                  <p>Languages currently knowledgeable or studying </p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React </li>
                    <li> C </li>
                    <li> Java </li>
                  </ul>
                  <p>
                    You may contact him through email at:
                    <b>Humberto.Messeguer@ucf.edu</b>
                  </p>
                </center>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
