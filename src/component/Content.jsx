import React from 'react';
import Leftcontent from './Leftcontent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rightcontent from './Rightcontent';
const Content = ()=>{
    return (
        <React.Fragment >
            <Grid container sx={{mt:10,px:2}} spacing={2}>
                <Grid item md={8}>
                    <Leftcontent/>
                </Grid>
                <Grid item md={4}>
                    <Rightcontent/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Content;
