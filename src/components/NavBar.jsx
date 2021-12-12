import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import { grey } from '@mui/material/colors'


export default function NavBar() {
  return (
    <Box>
        <AppBar position="fixed" style={{ backgroundColor: grey[900] }}>
        <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MARVEL
        </Typography>
        </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
    </Box>
  );
}