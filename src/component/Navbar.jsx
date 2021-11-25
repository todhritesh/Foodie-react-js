import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Navbar = () => {
    return (
        <React.Fragment>
            <AppBar color="secondary">
                <Container>
                    <Toolbar>
                        <Typography color="inherit" variant="h6" component="h5">
                            FOODIE
                        </Typography>
                        <TextField placeholder="write something .." size="small" variant="outlined" sx={{backgroundColor:'white',ml:'auto'}}></TextField>
                        <Button sx={{ml:0.5}} color="success" size="large" variant="contained">Go</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;