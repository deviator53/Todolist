import React,{useState} from 'react';
import clsx from 'clsx';
import DehazeIcon from '@material-ui/icons/Dehaze';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography, useTheme } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Item from '../item/Item';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LabTabs from '../authorize/Authorize';
import Signin from '../signin/Signin';
import Signup from '../signup/Signup';
import Display from '../display/Display';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import BookIcon from '@material-ui/icons/Book';

import './home.css';
import DrawerComponent from "../drawer";

const drawerWidth = 240;

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
    },
    //trial //
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      linkItem:{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // padding: '4px 32px',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]:{
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        },
       
    },
      icon:{
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize: '18px'
        }
    },
    text:{
      fontWeight: 500,
      [theme.breakpoints.down("sm")]:{
          display: 'none'
      }
  }
    }));


const Home = () => {
    const classes = useStyles();
    const [input, setInput] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    const [todos, setTodos]= useState([]);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const submitPic = async (e) => {
    e.preventDefault();
    console.log(profilePic);
}

    return (
        <>
        <div className={classes.gridContent}>
        <div className={classes.gridContainer}>
        <Grid container>
            <Grid className="hambuger__menu" item xs={2}> 
               <IconButton
                 color="inherit"
                 aria-label="open drawer"
                 onClick={handleDrawerOpen}
                 edge="start"
                 className={clsx(classes.menuButton, open && classes.hide)}
               >
                <DehazeIcon/>
                </IconButton>

        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
               <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
               </IconButton>
            </div>

            <Divider />

            <div className="profile__picture">
                <form onSubmit={submitPic}>
                    <div className="display__picture">
                        <div className="display__container">
                            <label htmlFor="display" className="display__option">
                                <AddAPhotoIcon htmlColor="grey" className="display__icon" />
                                <input
                                    style={{ display:'none'}}
                                    type="file"
                                    id="display"
                                    accept="image/*"
                                    onChange={(e)=> setProfilePic(e.target.files[0])}
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="profile__button">Upload</button>
                </form>
             </div>

             <Divider/>

             <div className={classes.linkItem}>
                <BookIcon className={classes.icon}/>
                <Typography className={classes.text}>Notes</Typography>
             </div>

             <Divider/>

             <div className={classes.linkItem}>
                <DeleteIcon className={classes.icon}/>
                <Typography className={classes.text}>Trash</Typography>
             </div>

             <Divider/>

             <div className={classes.linkItem}>
                <ExitToAppIcon className={classes.icon}/>
                <Typography className={classes.text}>Sign Out</Typography>
             </div>

         
      </Drawer>

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
                    <Grid item xs={12} sm={12} md={5} lg={5} >
                        <Signin className="sign__box"/>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
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
