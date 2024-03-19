import React from "react";
import '../style/Model.css';


export const addTask = ({openAddTask, setOpenItem})=>{
    
    const handleClose=()=>{
        setOpenItem(false);
    }

    return( <>
    <div className="overlay" onClick={handleClose}></div>
        <div>
            <div class="Box">
            <div class="centerings">
            <h3> Add new task</h3>
            <button class="crossPosition" onClick={handleClose}><img src={require(`../image/arrow.png`)}/></button>
            </div>
            <form>
            <div class="centerForm">
                <input class="inputMargin" type="text" placeholder="Enter your task" name="task"/><br/>
                <label class="LabelMargin">Choose time</label>
                <input class="inputMargin" type="time" name="time"/>
                </div>
            <div class="centerForm">
                <label class="LabelMargin">Select priority</label>
                <select class="inputMargin2">
                    <option value="high">High priority</option>
                    <option value="medium">Medium priority</option>
                    <option value="Low">Low priority</option>
                </select>
                <label class="LabelMargin">Choose color</label>
                <input class="inputMargin2" style={{width:"107px",marginRight:'75px'} } type="color" name="color" value="#ff0000" />
            </div> 
                <button class="buttonMargin"><span> add Task </span></button>
            
            </form>
            </div>
        </div>
    </>
    );
}