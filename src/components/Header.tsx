import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as GatsbyLink } from "gatsby";
import { Box } from "@mui/material";
import Login from "./login";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import { useAuthValue } from "./Auth/AuthContext";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Register from "./register";

function Header() {
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);
  const [registerDialogOpen, setRegisterDialogOpen] = React.useState(false);
  const { currentUser } = useAuthValue();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const toggleLoginDialog = () => setLoginDialogOpen(!loginDialogOpen);
  const toggleRegisterDialog = () => setRegisterDialogOpen(!registerDialogOpen);
  const handleLogout = () => signOut(auth);

  return (
    <>
      <Login open={loginDialogOpen} handleClose={toggleLoginDialog} />
      <Register open={registerDialogOpen} handleClose={toggleRegisterDialog} />
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Grid container spacing={2} justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs="auto">
            <Button component={GatsbyLink} to="/">Blog</Button>
          </Grid>
          <Grid item xs>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
            >
              <Box component={"span"} sx={{ display: { xs: "none", sm: "initial" } }}>Micro Contentful</Box>
              <Box component={"span"} sx={{ fontSize: { xs: "18px", sm: "inherit" } }}>&nbsp;Blogsite</Box>
            </Typography>
          </Grid>
          <Grid item xs={"auto"}>
            {
              currentUser !== null ?
                <Box>
                  <IconButton onClick={handleClick} color={"primary"}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button variant="text" size="small" onClick={toggleLoginDialog}>Sign in</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button variant="text" size="small" onClick={toggleRegisterDialog}>Sign Up</Button>
                    </MenuItem>
                  </Menu>
                </Box>
                :
                <Box>
                  <Button variant="text" size="small" onClick={handleLogout}>Sign Out</Button>
                </Box>
            }
          </Grid>
        </Grid>
      </Toolbar>
    </>
  );
}

export default Header;
