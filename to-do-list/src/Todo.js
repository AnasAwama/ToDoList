import React from "react";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import './Body.css';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            list:["In progress","Done"],
            item : ["High priority", "Medium priority" ,"Low priority", ],
            tasks:{
            high:["Send Email"],
            medium:["Do Project", "contact Manager"],
            low:["send Project"]
            },
        }
    }

    myTasks(index) {
        let task;
        if(index === 0){
            task =this.state.tasks.high.map((task, idx)=> <div key={idx}><div class="smallBorder">{task}</div></div>)
            
        }else if(index === 1){
            task =this.state.tasks.medium.map((task, idx)=> <div key={idx}><div class="smallBorder">{task}</div></div>)
        }else{
            task =this.state.tasks.low.map((task, idx)=> <div key={idx}><div class="smallBorder">{task}</div></div>)
        }
        return(task)
    }
    render() {
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
                <h4>to do list  <button class="opacity">+</button></h4>
                <div class="backGround">
                    <div class="alignRow" >
                            <div class="Border">
                                <div class="marginLeft">
                                    <p>To do <span class="opacity"> | </span>2</p>
                                    <div class="underline"></div><br/>
                                    {this.state.item.map((item, index)=>(
                                    <div key={index}>
                                        <p>{item}I<span class="opacity"> | </span>4</p>
                                        <div class="rowAlign">{this.myTasks(index)}</div>
                                        <div class="itemAlign">
                                            <button class="opacity">+</button>
                                            <button class="opacity"><img src={require(`./image/edit.png`)}></img></button>
                                        </div>
                                        {index !== this.state.item.length - 1 && (
                                            <div style={{ borderColor: 'black' }} className="underline opacity"></div>
                                        )}
                                        <br/>
                                    </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                    <div class="alignRow" >
                        {this.state.list.map((list,indexItem)=>(<div key={indexItem}>
                            <div class="Border">
                                <div class="marginLeft">
                                    <p>{list} <span class="opacity"> | </span>2</p>
                                    <div class="underline"></div><br/>
                                    {this.state.item.map((item, index)=>(
                                    <div key={index}>
                                        <div class="rowAlign paddingTop">{this.myTasks(index)}</div>
                                        <div class="itemAlign">
                                            <button class="opacity">+</button>
                                            <button class="opacity"><img src={require(`./image/edit.png`)}></img></button>
                                        </div>
                                        {index !== this.state.item.length - 1 && (
                                            <div style={{ borderColor: 'black' }} className="underline opacity"></div>
                                        )}
                                        <br/>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            <section class="jumbotron text-center bg-primary text-white"></section>
        </body>
    )}
}
export default Home;