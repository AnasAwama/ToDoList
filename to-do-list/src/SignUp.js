import React ,{Component}from "react"
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import './style/signup.css';

class SignUp extends React.Component{
    
    render(){

        return(
            <body className="bgColor">
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
                <div className="BorderReg">
                    <form  method="post">
                        <h1 className="Regh1">Registration Page</h1>
                        <div class="formInputGroup">
                            <input className="formInput" type="text" name="name"  placeholder="Full Name" required/>
                            <input className="formInput" type="email" name="email"  placeholder="Email Address" required/>
                        </div><br/>
                        <div class="formInputGroup">
                            <input className="formInput" type="password" name="password" placeholder="Create Password" required/>
                            <div className="EyeMarginRight">
                            </div>
                            <input className="formInput" type="password" name="confirmPassword" placeholder="Confirm Password" required/>
                            <div className="EyeMarginLeft">
                            
                            </div>
                        </div><br/>
                        <div className="formRangeContainer">
                        <label className="LabelAge">Age: </label>
                        <input
                                type="range"
                                className="fromRangeInput formInput "
                                min="0"
                                max="100"
                                name="age"
                            />
                            <output className="outputAge">0</output><br/><br/>
                        </div>
                        <label className="labelGender"><span>Gender:</span>
                        <div className="formRadioGroup">
                            <input type="radio" name="gender" value="male" required/> Male
                            <input type="radio" name="gender" value="female" required/> Female
                            <input type="radio" name="gender" value="other" required/> Other
                        </div>
                        </label>
                        <br/>
                        <button className="formbutReg" type="submit" ><span>Sign-Up</span></button>
                        <div className="FontSizeReg">Already have an account? LogIn Here </div>
                    </form>
                </div>
            </body>
        )
    
    }
}
export default SignUp;