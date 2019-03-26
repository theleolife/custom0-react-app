import React from 'react';

const header = ( props ) => (
    <section className="hero is-info is-medium is-bold">
      <div className="hero-head">
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="">
                        <p>Logo here</p>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="tabs is-right">
                            <ul>
                                <li className="is-active"><a>Download App</a></li>
                                <li><a href="">Examples</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Team</a></li>
                                <li><a href="">Help</a></li>
                            </ul>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="">
                                    <span className="icon">
                                        <i className="fa fa-github"></i>
                                    </span>
                                    <span title="">Download</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </section>
);

export default header;
