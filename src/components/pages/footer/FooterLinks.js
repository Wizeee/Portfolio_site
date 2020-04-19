import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterLinks extends Component {
  render() {
    return (
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center copyright pb-3">
              Copyright <i className="text-light">A footer would go here</i>
              <sup>&copy;</sup> 2019
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterLinks;
