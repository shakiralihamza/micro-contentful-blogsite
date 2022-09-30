import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as GatsbyLink} from 'gatsby';
import { Box } from "@mui/material";

function Header() {

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', mb:3}}>
        <Button component={GatsbyLink} to="/">Blog</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Box component={'span'} sx={{display: {xs: 'none', sm: 'initial'}}}>Micro Contentful</Box>
          <Box component={'span'} sx={{fontSize:{xs:'18px', sm:'inherit'}}}>&nbsp;Blogsite</Box>
        </Typography>
        <Button variant="outlined" size="small">Sign in</Button>
      </Toolbar>
    </>
  );
}
export default Header;
