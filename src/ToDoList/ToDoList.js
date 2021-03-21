import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import "../../src/App.css";

const ToDoList = (props) => {


    return <>

        <div className="todo_style">
            <FontAwesomeIcon onClick={()=>props.onSelect(props.id)} className="minus-btn" icon={faMinusCircle} />
            <li>{props.text}</li>
        </div>

    </>
};

export default ToDoList;

