import React, { useState } from 'react'

const ToDo = () => {
    const[task,setTask]=useState([]);
    const[textIn,setTextIn]=useState("");

    function handleClick(e){
        setTask([...task,textIn]);
        setTextIn("");
    }
    const handleRemove=(index)=>{
        const updatedTask = [...task];
        updatedTask.splice(index, 1);
        setTask(updatedTask);
    }
    
  return (
    <div>
        <div>
            <h3>To-Do List</h3>
            <input type="text" onChange={(e) => {setTextIn(e.target.value)}} value= {textIn}/>
            <button onClick={handleClick}>Add Todo</button>
        </div>
        <div > 
            {
                task && 
                task.map((element,index)=>(
                    <div className='list'  key={index}>
                        <h2>{element}</h2>
                        <button className="btn" onClick={()=>handleRemove(index)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>    
  )
}

export default ToDo