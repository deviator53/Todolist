import React, {useContext, useRef, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import toast from 'react-hot-toast';
import {AuthContext} from '../../context/AuthContext';
import {loginCall} from '../../apiCalls';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const useStyles = makeStyles((theme) => ({


}));


const Signin = () => {
    const classes = useStyles();
    // const userInput = useRef();
    // const password = useRef();
    // const dispatch = useContext(AuthContext); 
    const [userInput, setUserInput] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const { isFetching, dispatch } = useContext(AuthContext);
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!userInput === '') return toast.error('Username is required');
      if(!password === '') return toast.error('Password is required');
  
  
      const user = {
        userInput,
        password
      }
  
      loginCall(user, dispatch);
  
    }
        return (
        <>
        <div className="form-container">
           <div className="form-content">
             <h2>Sign In</h2>
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <div className="input__box">
                        <label className="sign__label">Email:</label><br/>
                        <input type="email" className="sign__input" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
                    </div>
                    <div className="input__box">
                        <label className="sign__label">Password:</label><br/>
                        <input type="password" className="sign__input" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    </div>

                    <button className="form__btn">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signin
