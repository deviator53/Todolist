import React,{useState} from 'react';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import './display.css';

const Display = ({todos, setTodos}) => {
    return (
        <>
        {todos.map((todo)=>(
        
        <div className="display__box">
            <div className="display__input" key={todo.id}>
                <span onChange={(event)=> event.preventDefault()} >
                {todo.title} 
                </span>
            </div>
            <div className="display__box__right">
                <span className="display__icon">
                    <CreateIcon/>
                </span>
                <span className="display__icon">
                    <DeleteIcon/>
                </span>
            </div>
        </div>

        )
        )}
        
        </>
    )
}

export default Display;
