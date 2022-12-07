import * as React from "react";
import { Box, Drawer } from "@mui/material";
import UserProfile from "../../common/userProfile/UserProfile";

const SwipeableRightDrawer = (props) => {
        const { isOpenDrawer, setOpenRightDrawer, settingsValue } = props;

        const [state, setState] = React.useState({
                top: false,
                left: false,
                bottom: false,
                right: false,
        });

        const toggleDrawer = (anchor, open) => (event) => {
                if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                        return;
                }

                setState({ ...state, [anchor]: open });
        };

        const renderDrawerComponents = () => (
                <Box sx={{ width: 480, mt: 5 }} role="presentation" onClick={toggleDrawer("right", false)} onKeyDown={toggleDrawer("right", false)}>
                        {settingsValue === "Profile" && <UserProfile />}
                </Box>
        );

        return (
                <Drawer anchor={"right"} open={isOpenDrawer} onClose={() => setOpenRightDrawer(false)} onOpen={() => setOpenRightDrawer(true)}>
                        <br />
                        {renderDrawerComponents()}
                </Drawer>
        );
};

export default SwipeableRightDrawer;
