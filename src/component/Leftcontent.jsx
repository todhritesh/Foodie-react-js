import React from 'react';
import Container from '@mui/material/Container';
import Fcard from './Fcard';
import { Grid } from '@mui/material';
const Leftcontent = () => {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Fcard/>
                <Fcard/>
                <Fcard/>
                <Fcard/>
                <Fcard/>
                <Fcard/>
            </Grid>
        </React.Fragment>
    )
}

export default Leftcontent;