import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TopHeaderNavigation from './web/components/core/nav/HeaderNavbar';
import LeftBar from './web/components/core/leftbar/Leftbar';
import { DrawerHeader } from './web/components/core/drawer/DrawerHeader';
import SwipeableRightDrawer from './web/components/core/drawer/RightProfileDrawer';
import { adminSideMenus, customerSideMenus } from './sidemenus';


const BaseApp = (props) => {
  const { userInfo, userToken } = useSelector((state) => state.user);
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [openRightDrawer, setOpenRightDrawer] = React.useState(false);
  const [settingsValue, setSettingsValue] = React.useState("");
  const [sideMenus, setSideMenus] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getUrlType = (url) => {
    if (url.includes("admin")) {
      return "admin";
    } else if (url.includes("customer")) {
      return "customer";
    }
  }

  React.useEffect(() => {
    if (!userToken) {
      navigate('/login');
    }
    if (userInfo.role === "admin") {
      setSideMenus(adminSideMenus);

      if (getUrlType(location.pathname) === "customer") {
        navigate('/admin/dashboard');
      }
    } else if (userInfo.role === "customer") {
      setSideMenus(customerSideMenus);
      if (getUrlType(location.pathname) === "customer") {
        navigate('/customer/dashboard');
      }

    }
  }, [navigate, userToken])


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopHeaderNavigation setOpenRightDrawer={setOpenRightDrawer} setSettingsValue={setSettingsValue} />
      <LeftBar sideMenus={sideMenus} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
      <SwipeableRightDrawer isOpenDrawer={openRightDrawer} setOpenRightDrawer={setOpenRightDrawer} settingsValue={settingsValue} />
    </Box>
  );
}


export default BaseApp;