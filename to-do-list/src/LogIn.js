import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style/login.css';

export class LogIn extends React.Component {

    render(){
        return(
            <div className="bgColor">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></hr></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="margtop">
                    <div className="BorderLog">
                        <form  method="post">
                            <h1 className="Logh1">Log In Page</h1>
                            <input className="formMid" type="Text" name="email"  placeholder="Enter Your Email" /><br />
                            <input className="formMid" type="password" name="password"  placeholder="Enter Your Password" />
                            <div className="EyeMargin">
                                {/* Show/hide password functionality */}
                            </div>
                            <br />
                            <button className="btn btn-light formbut" type="Submit" ><span>Log-In</span></button>
                            <div className="FontSize">If you do not have an account Sing-Up Here</div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default LogIn;