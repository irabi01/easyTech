import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navigation">
                    <Link className="navbar-brand" to="/">easyTech Solution</Link>
                    <button className="cpBtn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>

                    <div className="collapse navbar-collapse w3-card" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/works">Works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#/contact">Contact</Link>
                        </li>
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}

export default Navigation
