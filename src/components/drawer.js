import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
  
  list: {
    width: '250px'
  },
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "black"
    },
    linkText:{
      textDecoration: 'none'
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.list}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.linkText}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.linkText}>About</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.linkText}>Shop</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.linkText}>Blog</Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.linkText}>Contact</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;