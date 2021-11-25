import React from 'react';
import { Stack } from '@mui/material';
import Rtable from './Rtable';
import Amountcard from './Amountcard';
import Btngroup from './Btngroup';

const Rightcontent = () => {
    return (
        <React.Fragment>
            <Stack spacing={2} direction="column">
                <Rtable/>
                <Amountcard/>
                
                <Btngroup/>
            </Stack>
        </React.Fragment>
    )
}

export default Rightcontent;