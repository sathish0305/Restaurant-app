import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


function NavigationBar() {
  const [openMenu,setOpenMenu] = useState(false)
  const menuOption = [
    {
      text: "Home",
      icon: <HomeIcon />
    },{
      text: "About",
      icon: <InfoIcon />
    },
    ,{
      text: "Testimonials",
      icon: <CommentRoundedIcon />
    },{
      text: "Contact",
      icon: <PhoneRoundedIcon />
    },{
      text: 'Cart',
      icon: <ShoppingCartRoundedIcon />
    }
  ];
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={logo} alt="" />
        </div>
        <div className='navbar-links-container'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">
                  <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Bookings Now</button>
        </div>
              
                <div className="navbar-menu-container">
                  <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
                </div>    

                <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOption.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>  

    </nav>
  )
}

export default NavigationBar
