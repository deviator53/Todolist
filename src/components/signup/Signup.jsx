import React, {useRef, useState} from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const useStyles = makeStyles((theme) => ({


}));


const Signup = () => {
  const [email, setEmail] = useState("")
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
    const classes = useStyles();
    // const fullname = useRef();
    // const email = useRef();
    // const password = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(username === '') return toast.error('username is required');
      if(email === '') return toast.error('Email address is required');
      if(password === '') return toast.error('Password is required');

      const user = {
        username,
        email,
        password,
      }
      console.log(user);
      try{
        let res = await axios.post('http://localhost:4000/api/v1/auth/register', user);
        if(res.data.success) toast.success(res.data.msg);
        navigate('/login');
        console.log(res.data);
      }catch(err){
        if(!err.response.data.success) return toast.error(err.response.data.msg);
      }

    }

    return (
        <>
        <div className="form-container">
           <div className="form-content">
             <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
                    <div className="input__box">
                        <label className="sign__label">Email:</label><br/>
                        <input type="email" className="sign__input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input__box">
                        <label className="sign__label">Username:</label><br/>
                        <input type="text" className="sign__input" value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="input__box">
                        <label className="sign__label">Password:</label><br/>
                        <input type="password" className="sign__input" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {/* <div className="input__box">
                        <label className="sign__label">Confirm Password:</label><br/>
                        <input type="password" className="sign__input"/>
                    </div> */}

                    <button className="form__btn" type="submit">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signup;
