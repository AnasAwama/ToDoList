import React,{useState} from "react";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import './style/Start.css';
import  {AddItem}  from "./Model/addItem.jsx";

class Start extends React.Component {
    menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }

    userToggle() {
        const toggleMenu = document.querySelector(".UserAnimat");
        toggleMenu.classList.toggle("activeUser");
        }
    
    render() {
        return (
        <body className="bgColor">
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                Navbar
                </a>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        Link
                    </a>
                    </li>
                    <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                        </li>
                        <li>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                        </li>
                        <li>
                        <hr class="dropdown-divider"></hr>
                        </li>
                        <li>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                        </li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">
                        Disabled
                    </a>
                    </li>
                </ul>
                <div>
                    <div className="profileAlign">
                    <span onClick={() => this.userToggle()}>
                        <img
                        className="profileStyle"
                        src={require(`./image/profile.png`)}
                        />
                    </span>
                    <div className="UserAnimat">
                        <div className="action">
                        <div
                            className="profile"
                            onClick={() => this.menuToggle()}
                        >
                            <p class="">userName</p>
                        </div>
                        <div className="menu">
                            <ul>
                            <li>
                                <img
                                className="img2"
                                src={require("./image/edit-profile.png")}
                                />
                                <a to="/Edit">Edit Profile</a>
                            </li>
                            <li>
                                <img
                                className="img2"
                                src={require("./image/logout.png")}
                                />
                                <input
                                type="button"
                                className="logoutButton"
                                value="Logout"
                                onClick={this.handleLogout}
                                />
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </nav>
            <div>
            <div className="img">
                <img src="" />
            </div>
            <div className="rightBorder">
                <div className="SmallBorder">
                <h3 style={{ marginButtom: "5px" }}>Welcom to To Do</h3>
                <form>
                    <input
                    className="inputStyle"
                    type="input"
                    placeholder="New list Name"
                    />
                    <button className=" ButtonStyle" type="submit">
                    <span>Go</span>
                    </button>
                </form>
                <button className=" ButtonStyle2">
                    <span>Go to the old List</span>
                </button>
                </div>
            </div>
            </div>
        </body>
    );
  }
}
export default Start;
//767
//350
//900
//1519