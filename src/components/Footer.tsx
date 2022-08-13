import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Footer() {

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 9, pb:4 }}>
      <Container maxWidth="lg">
        <Typography color="text.secondary" variant={'subtitle1'} sx={{fontSize:14}} align={'center'}>
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Typography>
      </Container>
    </Box>
  );
}
