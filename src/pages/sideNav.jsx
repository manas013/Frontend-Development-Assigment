import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "../styles/navbar.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";


//this is navbar 


const SideNav=()=> {
    const [state, setState] = React.useState({
        Assesment: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {["Dashboard", "Assessment"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                {index % 2 === 0 ? <img  src='./images/dashboard.png'/> :<img  src='./images/note_alt.png'/>}
              </ListItemIcon>
                  <ListItemText primary={text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {["My Library"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <img  src='./images/quiz.png'/>
              </ListItemIcon>
                  <ListItemText style={{fontSize:'14px'}} primary={text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {["Round Status"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                <img src='./images/admin_meds.png'/>
              </ListItemIcon>
                  <ListItemText primary={text} />
                  <img src='./images/Frame 1000009228.png'/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
  return (
    <div>
          {["Assesment"].map((anchor) => (
        <React.Fragment key={anchor}>

          <div className='header_navbar'>
            <div>
          <Button style={{fontSize:'15px' ,marginLeft:'10px', fontWeight: '600',color:'#1c4980'}} onClick={toggleDrawer(anchor, true)}><img src='./images/segment.png'/>{anchor}</Button>
          </div>
          <div className='right'>
          <img src='./images/laptop_mac.png'/>
          </div>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </div>
  )
}

export default SideNav
