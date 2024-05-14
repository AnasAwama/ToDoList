import React,{useState} from "react";
import { BrowserRouter as Router, Routes,Route,Link } from "react-router-dom";
import './style/Body.css';
import './style/nav.css';
import  {AddItem}  from "./Model/addItem.jsx";
import  {addTask}  from "./Model/addTask.jsx";
import  {EditItem}  from "./Model/editItem.jsx";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusName: [],
      listId: [],
      statusIds: [],
      priority: [],
      priorityId: [],
      tasks: {
        taskId: [],
        taskPriority: [],
        taskStatus: [],
      },
      openAddItem: false,
      openEditItem: false,
      openAddTask: false,
        lName: [],
      userName:[],
    };
  }

  getList = async () => {
    try {
      const ListName = await fetch("http://localhost:8081/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(ListName);
      const dataList = await ListName.json();
      console.log(dataList);
      if (ListName.ok) {
        const listNames = dataList.map((item) => item.listName);
        const listIds = dataList.map((item) => item.listId);
        this.setState({ lName: listNames, listId: listIds });
        console.log("Data of the list Name: ", this.state.lName);
        console.log("Data of the list Id ", this.state.listId);
      } else {
        console.error("Response not OK:", ListName.statusText);
      }
    } catch (e) {
      console.error("Error during fetch:", e);
    }
  };

  getStatus = async () => {
    try {
      const statusTask = await fetch("http://localhost:8081/status", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(statusTask);
      const dataStat = await statusTask.json();
      console.log(dataStat);
      if (statusTask.ok) {
        // this.setState({ list: dataStat });
        // console.log("Data of the status", this.state.list);
        const statusNames = dataStat.map((item) => item.sName);
        const statusId = dataStat.map((item) => item.sID);
        this.setState({ statusName: statusNames, statusIds: statusId });
        console.log("Data of the status Name: ", this.state.statusName);
        console.log("Data of the status Id ", this.state.statusIds);
      } else {
        console.error("Response not OK:", statusTask.statusText);
      }
    } catch (e) {
      console.error("Error during fetch:", e);
    }
  };

  getpriority = async () => {
    try {
      const prioritys = await fetch("http://localhost:8081/priority", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("prioritys ", prioritys);
      const datapriority = await prioritys.json();
      console.log(datapriority);
      if (prioritys.ok) {
        const priorityNames = [];
        const priorityIds = [];
        datapriority.forEach((item) => {
          priorityNames.push(item.priorityName);
          priorityIds.push(item.priorityId);
        });
        this.setState({ priority: priorityNames, priorityId: priorityIds });
        console.log("Data of the priorityName ", this.state.priority);
        console.log("Data of the priorityId ", this.state.priorityId);
      } else {
        console.error("Response not OK:", prioritys.statusText);
      }
    } catch (e) {
      console.error("Error during fetch:", e);
    }
  };

  getTask = async () => {
    try {
      const tasksResponse = await fetch("http://localhost:8081/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("tasks ", tasksResponse);
      const taskData = await tasksResponse.json();
      console.log(taskData);
      if (tasksResponse.ok) {
        const taskNames = taskData.map((item) => item.task);
        const taskPriorities = taskData.map((item) => item.taskPriority);
        const taskStatus = taskData.map((item) => item.statusId);
        this.setState({
          tasks: {
            taskName: taskNames,
            taskPriority: taskPriorities,
            taskStatus: taskStatus,
          },
        });
        console.log("Data of the taskName ", taskNames);
        console.log("Data of the taskPriority ", taskPriorities);
        console.log("Data of the taskStatus ", taskStatus);
      } else {
        console.error("Response not OK:", tasksResponse.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  getUser = async () => {
    try {
      const logIn = await fetch("http://localhost:8081/log", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("logIn ", logIn);
      const logData = await logIn.json();
      console.log(logData);
        if (logIn.ok) {
        const userNames=logData
        this.setState({ userNames:this.state.userName});
        console.log("Data of the userName ", userNames);
      } else {
        console.error("Response not OK:", logData.statusText);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  componentDidMount() {
    this.getList();
    this.getStatus();
    this.getpriority();
    this.getTask();
    this.getUser();
  }

  menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }

  userToggle() {
    const toggleMenu = document.querySelector(".UserAnimat");
    toggleMenu.classList.toggle("activeUser");
  }

  addItems = () => {
    this.setState((prevState) => ({ openAddItem: !prevState.openAddItem }));
  };

  editItems = () => {
    this.setState((prevState) => ({ openEditItem: !prevState.openEditItem }));
  };

  addTasks = () => {
    this.setState((prevState) => ({ openAddTask: !prevState.openAddTask }));
  };

  myTasks(priorityIndex, statusIndex) {
    const { tasks } = this.state;

    if (
      !tasks ||
      !tasks.taskName ||
      !tasks.taskPriority ||
      !tasks.taskStatus ||
      !Array.isArray(tasks.taskName) ||
      !Array.isArray(tasks.taskPriority) ||
      !Array.isArray(tasks.taskStatus)
    ) {
      console.error("Tasks are not in the expected format:", tasks);
      return null;
    }

    const { taskName, taskPriority, taskStatus } = tasks;

    // Filter tasks based on both task priority and status ID
    const filteredTasks = taskName.filter((name, idx) => {
      return (
        taskPriority[idx] === priorityIndex + 1 &&
        taskStatus[idx] === statusIndex + 1
      );
    });

    // Render filtered tasks
    const taskElements = filteredTasks.map((name, idx) => (
      <div key={idx}>
        <div className="smallBorder">{name}</div>
      </div>
    ));

    return taskElements;
  }

  render() {
    const { statusName } = this.state;

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
                {this.state.userName.session==1 ? (
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
                          <p class="">{this.state.userName.username}</p>
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
                ) : (
                  <>
                    <Link
                      to="/LogIn"
                      type="button"
                      style={{
                        fontFamily: "poor story",
                        fontSize: "large",
                        fontWeight: "500",
                      }}
                      class=" btn btn-outline-dark  Lright"
                    >
                      Log-In
                    </Link>
                    <Link
                      to="/Regist"
                      type="button"
                      style={{
                        fontFamily: "poor story",
                        fontSize: "large",
                        fontWeight: "500",
                      }}
                      class=" btn btn-outline-light  Sright"
                    >
                      Sign-Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div>
          <h4>
            {this.state.lName} list
            <button class="opacityButton" onClick={this.addTasks}>
              {" "}
              +{" "}
            </button>
          </h4>
          {this.state.openAddItem && (
            <AddItem
              openAddItem={this.state.openAddItem}
              setOpenItem={this.addItems}
            />
          )}
          {this.state.openEditItem && (
            <EditItem
              openEditItem={this.state.openEditItem}
              setOpenItem={this.editItems}
            />
          )}
          {this.state.openAddTask && (
            <AddItem
              openAddTask={this.state.openAddTask}
              setOpenItem={this.addTasks}
            />
          )}
          {/* <div class="backGround">
                    
                    <div class="alignRow" >
                            <div class="Border">
                                <div class="marginLeft">
                                {statusName.length > 0 && <p>{statusName[0]}<span class="opacity"> | </span>2</p>}
                                    <div class="underline"></div><br/>
                                    {this.state.priority.map((item, index)=>(
                                    <div key={index}>
                                        <p>{item}I<span class="opacity"> | </span>4</p>
                                        <div class="rowAlign">{this.myTasks(index)}</div>
                                        <div class="itemAlign">
                                            <button class="opacityButton" onClick={this.addItems}>+</button>
                                            
                                            <button class="opacityButton" onClick={this.editItems}><img src={require(`./image/edit.png`)}></img></button>
                                        </div>
                                        {index !== this.state.priority.length - 1 && (
                                            <div style={{ borderColor: 'black' }} className="underline opacity"></div>
                                        )}
                                        <br/>
                                    </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                    <div class="alignRow" >
                    {this.state.statusName.map((item, indexItem) => (
                        indexItem !== 0 && (
                            <div key={indexItem}>
                                <div class="Border">
                                    <div class="marginLeft">
                                        <p>{item} <span class="opacity"> | </span>2</p>
                                        <div class="underline"></div><br/>
                                        {this.state.priority.map((item, index) => (
                                            <div key={index}>
                                                <div class="rowAlign paddingTop">{this.myTasks(index)}</div>
                                                <div class="itemAlign">
                                                    <button class="opacity" onClick={this.addItems}>+</button>
                                                    <button class="opacity" onClick={this.editItems}><img src={require(`./image/edit.png`)} alt="edit"></img></button>
                                                </div>
                                                {index !== this.state.priority.length - 1 && (
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
                    
                </div> */}
          <div class="backGround">
            <div class="alignRow">
              <div class="Border">
                <div class="marginLeft">
                  {statusName.length > 0 && (
                    <div>
                      <p>
                        {statusName[0]} <span class="opacity"> | </span>2
                      </p>
                      <div class="underline"></div>
                      <br />
                      {this.state.priority.map((item, index) => (
                        <div key={index}>
                          <p>
                            {item} <span class="opacity"> | </span>4
                          </p>
                          <div class="rowAlign">{this.myTasks(index, 0)}</div>
                          <div class="itemAlign">
                            <button
                              class="opacityButton"
                              onClick={this.addItems}
                            >
                              +
                            </button>
                            <button
                              class="opacityButton"
                              onClick={this.editItems}
                            >
                              <img src={require(`./image/edit.png`)}></img>
                            </button>
                          </div>
                          {index !== this.state.priority.length - 1 && (
                            <div
                              style={{ borderColor: "black" }}
                              className="underline opacity"
                            ></div>
                          )}
                          <br />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {this.state.statusName.slice(1).map((item, indexItem) => (
              <div key={indexItem}>
                <div class="Border">
                  <div class="marginLeft">
                    <p>
                      {item} <span class="opacity"> | </span>2
                    </p>
                    <div class="underline"></div>
                    <br />
                    {this.state.priority.map((item, index) => (
                      <div key={index}>
                        <div class="rowAlign paddingTop">
                          {this.myTasks(index, indexItem + 1)}
                        </div>
                        <div class="itemAlign">
                          <button class="opacity" onClick={this.addItems}>
                            +
                          </button>
                          <button class="opacity" onClick={this.editItems}>
                            <img
                              src={require(`./image/edit.png`)}
                              alt="edit"
                            ></img>
                          </button>
                        </div>
                        {index !== this.state.priority.length - 1 && (
                          <div
                            style={{ borderColor: "black" }}
                            className="underline opacity"
                          ></div>
                        )}
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section class="jumbotron text-center bg-primary text-white"></section>
      </body>
    );
  }
}
export default Todo;