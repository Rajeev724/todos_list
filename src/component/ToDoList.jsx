import React from "react";

const ToDoList =(props)=>{
    const deleteItem=()=>{
        console.log("deleted")
    }

    return(

        <>
        <div className="todo_style">

            <i>
                <img id="cross" src="remove.png" alt="na" 
                onClick={()=>{
                    props.onSelect(props.id)
                }}
                />
            </i>
            <li>{props.text}</li>
        </div>
    </>
    );
}
export default ToDoList;
