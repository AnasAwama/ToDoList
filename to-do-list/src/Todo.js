import React,{useState} from "react";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import './style/Body.css';
import './style/nav.css';
import  {AddItem}  from "./Model/addItem.jsx";
import  {addTask}  from "./Model/addTask.jsx";
import  {EditItem}  from "./Model/editItem.jsx";

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            list:[],
            item : ["High priority", "Medium priority" ,"Low priority", ],
            tasks:{
            high:["Send Email"],
            medium:["Do Project", "contact Manager"],
            low:["send Project"],
            openAddItem : false,
            openEditItem : false,
            openAddTask : false,
            lName:"",

        },
        }
    }

    getList = async ()=>{
        try{
            const ListName= await fetch("http://localhost:8081/list",{
                method:"GET",
                headers:{"Content-Type": "application/json",
                Accept:"application/json",
            },
        });
        console.log(ListName);
            const dataList = await ListName.json();
            console.log(dataList);
            if(ListName.ok){
                this.setState({ lName: dataList[0].listName });
                console.log("Data is",this.state.lName);
            }else {
                console.error("Response not OK:", ListName.statusText);
            }
        }catch(e){
            console.error("Error during fetch:", e);
        }
    } 

    getStatus = async ()=>{
        try{
            const statusTask= await fetch("http://localhost:8081/status",{
                method:"GET",
                headers:{"Content-Type": "application/json",
                Accept:"application/json",
            },
        });
        console.log(statusTask);
            const dataStat = await statusTask.json();
            console.log(dataStat);
            if(statusTask.ok){
                this.setState({ list: dataStat });
                console.log("Data of the status", this.state.list);
                
                console.log("Data of the status",this.state.list);
            }else {
                console.error("Response not OK:", statusTask.statusText);
            }
        }catch(e){
            console.error("Error during fetch:", e);
        }
    } 

    componentDidMount() {
        this.getList();
        this.getStatus();
    }

    menuToggle() {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }

    userToggle() {
        const toggleMenu = document.querySelector(".UserAnimat");
        toggleMenu.classList.toggle("activeUser");
    }

    addItems = ()=>{
        this.setState(prevState=>({openAddItem:!prevState.openAddItem}))
        
    };

    editItems = ()=>{
        this.setState(prevState=>({openEditItem:!prevState.openEditItem}))
        
    };

    addTasks = ()=>{
        this.setState(prevState=>({openAddTask:!prevState.openAddTask}))
        
    };

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
        const { list } = this.state;

        return(
        <body className="bgColor" >
            <nav class="navbar navbar-expand-lg">
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
                <div>
                    <div className="profileAlign"><span onClick={()=>this.userToggle()}><img className="profileStyle" src={require(`./image/profile.png`)}/></span>
                        <div className="UserAnimat">
                            <div className="action">
                                <div className="profile" onClick={()=>this.menuToggle()}>
                                    <p  class="">userName</p>
                                </div>
                                <div className="menu">
                                    <ul>
                                        <li>
                                            <img className="img2" src={require("./image/edit-profile.png")}/><a to="/Edit">Edit Profile</a>
                                        </li>
                                        <li>
                                            <img className="img2" src={require("./image/logout.png")} /><input type="button" className="logoutButton" value="Logout" onClick={this.handleLogout}/>
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
            
                <h4>{this.state.lName} list<button class="opacityButton" onClick={this.addTasks}> + </button></h4>
                {this.state.openAddItem && <AddItem openAddItem={this.state.openAddItem} setOpenItem={this.addItems}/>}
                {this.state.openEditItem && <EditItem openEditItem={this.state.openEditItem} setOpenItem={this.editItems}/>}
                {this.state.openAddTask && <AddItem openAddTask={this.state.openAddTask} setOpenItem={this.addTasks}/>}
                <div class="backGround">
                    <div class="alignRow" >
                            <div class="Border">
                                <div class="marginLeft">
                                {list.length > 0 && <p>{list[0].sName}<span class="opacity"> | </span>2</p>}
                                    <div class="underline"></div><br/>
                                    {this.state.item.map((item, index)=>(
                                    <div key={index}>
                                        <p>{item}I<span class="opacity"> | </span>4</p>
                                        <div class="rowAlign">{this.myTasks(index)}</div>
                                        <div class="itemAlign">
                                            <button class="opacityButton" onClick={this.addItems}>+</button>
                                            
                                            <button class="opacityButton" onClick={this.editItems}><img src={require(`./image/edit.png`)}></img></button>
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
                    {this.state.list.map((item, indexItem) => (
                        indexItem !== 0 && (
                            <div key={indexItem}>
                                <div class="Border">
                                    <div class="marginLeft">
                                        <p>{item.sName} <span class="opacity"> | </span>2</p>
                                        <div class="underline"></div><br/>
                                        {this.state.item.map((item, index) => (
                                            <div key={index}>
                                                <div class="rowAlign paddingTop">{this.myTasks(index)}</div>
                                                <div class="itemAlign">
                                                    <button class="opacity" onClick={this.addItems}>+</button>
                                                    <button class="opacity" onClick={this.editItems}><img src={require(`./image/edit.png`)} alt="edit"></img></button>
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
                        )
                    ))}

                    </div>
                </div>
            </div>
            <section class="jumbotron text-center bg-primary text-white"></section>
        </body>
    )}
}
export default Home;