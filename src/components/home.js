import React,{useState} from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Item from '../item/Item';
import Button from '@material-ui/core/Button';
import LabTabs from '../authorize/Authorize';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';
import Display from '../display/Display';
import './home.css';
import DrawerComponent from "../drawer";


const useStyles = makeStyles((theme) => ({
    gridContent:{
        width: '100%',
        backgroundColor: 'whitesmoke',
        
    },
    gridContain:{
        backgroundColor: 'rgb(201, 235, 201)',
        padding: '20px',
        width: '60%',
        margin: 'auto',
        borderRadius: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

    },
    gridContainer:{
        padding: '30px'
    },
    gridHead:{
        textAlign: 'center'
    }
  
}));


const Home = () => {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [todos, setTodos]= useState([]);
    return (
        <>
        <div className={classes.gridContent}>
        <div className={classes.gridContainer}>
        <Grid container>
            <Grid className="hambuger__menu" item xs={2}> 
                <DehazeIcon/>
            </Grid>
            <Grid item xs={8} className={classes.gridContain}>
                    <h1 className={classes.gridHead}>TODO APP</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi distinctio illum veritatis,
                        porro id omnis commodi eum odio voluptatum dolorem quos nemo quidem rerum reiciendis quam possimus
                        quae nobis expedita animi! Obcaecati voluptatum beatae voluptate, praesentium corporis nobis quis 
                        repellendus sit assumenda quo voluptatibus nisi temporibus itaque iste nesciunt.</p> 
                
            </Grid>
         
            <Grid item xs={2}>

            </Grid>
           
        </Grid>
        <Grid container>
                <Grid item xs={2}>
                   {/* <Item/> */}
                </Grid>

                <Grid container xs={8}>
                    <Grid item xs={5} >
                        <Signin className="sign__box"/>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={6}>
                        <Signup className="sign__box"/>
                    </Grid>
                </Grid>
                {/* <Grid item xs={2}>
                    
                </Grid> */}
        </Grid>
        <Grid container>
            <Grid item xs={2}>

            </Grid>
                <Grid item xs={3}>
                    <Item
                        input={input}
                        setInput = {setInput}
                        todos={todos}
                        setTodos ={setTodos}
                    />
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={4} >
                    <Display todos={todos} setTodos={setTodos}/>
                </Grid>
            <Grid item xs={2}>

            </Grid>
        </Grid>

        </div>
        </div>
        </>
    )
}

export default Home;
