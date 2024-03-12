import React,{useState} from "react";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import './style/Start.css';
import  {AddItem}  from "./Model/addItem.jsx";

class Start extends React.Component {
    render(){
        return(
            <body>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
                <div>
                    <div className="img"><img  src=""/></div>
                    <div className="rightBorder">
                        <div className="SmallBorder">
                        <h3 style={{marginButtom:"5px"}}>Welcom to To Do</h3>
                            <form>
                            <input className="inputStyle" type="input" placeholder="New list Name"/>
                            <button className=" ButtonStyle" type="submit"><span>Go</span></button>
                            </form>
                            <button className=" ButtonStyle2" ><span>Go to the old List</span></button>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default Start;
//767
//350
//900
//1519