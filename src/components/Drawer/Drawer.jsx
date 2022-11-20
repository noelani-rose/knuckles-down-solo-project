import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Fragment } from 'react';


// <CustomListItem to="/" primary="Home Page" />

function DrawerTemp () {
    const [state, setState] = useState({left: false});
    const currentProgram = useSelector(store => store.currentProgram)
    
    // if (currentProgram) {
    //     currentProgram = []
    // }




      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const links = [
        { to: '/user', name: 'Home', icon: <HomeIcon /> },
        // { to: `/program/${currentProgram[0].programs_id}`, name: 'My Program', icon: <FitnessCenterIcon /> },
        { to: '/journal', name: 'My Journal', icon: <AutoStoriesIcon /> },
        { to: '/progress', name: 'My Progress', icon: <TrendingUpIcon /> }
      ]

      const otherLinks = [
        { to: '/about', name: 'About',icon: <LiveHelpIcon /> }, 
        { to: '/settings', name: 'Settings', icon: <SettingsIcon /> },
        { to: '/info', name: 'Info', icon: <InfoIcon />},
        { to: '/logout', name: 'Log Out', icon: <LogoutIcon /> }
      ]

 


      const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            {links.map(link => (
                <ListItem key={link.name} disablePadding>
                {link.icon}<Link to = {link.to}>
                <ListItemText primary = {link.name}/></Link>
                </ListItem >
            ))}
        </List>
          <Divider />
     
          <List>
            {otherLinks.map((link, index) => (
              <ListItem key={link.name} disablePadding>
                {link.icon}<Link to = {link.to}>
                  <ListItemText primary={link.name} /></Link>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
return (
    <div>
      {['left'].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon fontSize='large'/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
)

}

export default DrawerTemp