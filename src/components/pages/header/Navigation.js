import React, {Component} from 'react';
import { Link } from  'react-router-dom';
import PropTypes from 'prop-types';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
                <div className="container">
                    <Link className="navbar-brand " to="/">Humberto Messeguer</Link>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
