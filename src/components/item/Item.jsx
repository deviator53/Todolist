import React,{useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {v4 as uuidv4} from "uuid";
import './item.css';

const useStyles = makeStyles((theme) => ({
    
}));

const Item = ({ input, setInput, todos, setTodos }) => {
    const classes = useStyles();

        const onInputChange = (event) => {
            setInput(event.target.value);


        };

        const onFormSubmit =(event) => {
            event.preventDefault();
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
            setInput("");

        };

    return (
        <form onSubmit = {onFormSubmit}>
            <label>Add Item</label><br/>
            <input type="text" className="form-item" variant="outlined"
                placeholder="Add todo"
                value={input}
                required
                onChange={onInputChange}
             /><br/>
            <button className="item-button" type="submit">Submit</button>
        </form>
    )
}

export default Item;
