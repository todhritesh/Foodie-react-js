import React from 'react';
import { ButtonGroup , Button, Stack } from '@mui/material';
import { Box } from '@mui/system';

const Btngroup = () => {
    return (
        <React.Fragment>
            <Box  sx={{pt:25}}/>
                <Stack position="sticky" sx={{bottom:0}} spacing={1}  orientation="vertical">
                    <Button size="large" variant="contained" color="success">Order</Button>
                    <Button size="large" variant="contained" color="warning">Cancle</Button>
                    <Button size="large" variant="contained" color="error">Close</Button>
                </Stack>
        </React.Fragment>
    )
}

export default Btngroup;