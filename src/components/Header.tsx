import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link as GatsbyLink} from 'gatsby';

function Header() {

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', mb:3}}>
        <Button component={GatsbyLink} to="/">Home</Button>
        &nbsp;
        &nbsp;
        <Button component={GatsbyLink} to="/blog">Blog</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Micro Contentful Blogsite
        </Typography>
        <Button variant="outlined" size="small">Sign up</Button>
        &nbsp;
        &nbsp;
        <Button variant="outlined" size="small">Sign in</Button>
      </Toolbar>
    </>
  );
}
export default Header;
