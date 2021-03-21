import React, { useState } from 'react';
import '../../src/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import ToDoList from '../ToDoList/ToDoList';

const Home = () => {

    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInput(event.target.value);
    }
    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, input]
        })
        setInput("");
    }
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((item, index) => index !== id);
        })
    }

    
    return (
        <div>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>Todo App</h1>
                    <br />
                    <input type="text" placeholder="Add Your Task" onChange={itemEvent} value={input} />
                    <button onClick={listOfItem}><FontAwesomeIcon icon={faPlusCircle} /></button>

                    <ol>
                        {
                            items.map((item, index) => <ToDoList key={index} id={index} onSelect={deleteItem} text={item}></ToDoList>)
                        }
                    </ol>

                </div>

            </div>
        </div>
    );
};

export default Home;

