import React from 'react'
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';


const Amountcard = ()=>{
    return (
        <React.Fragment>
            <Card variant="outlined" >
                <CardContent>
                    <Typography variant="h3">
                        Total
                        <Typography sx={{ml:5}} variant="h3" component="a" color="error">
                            $ 234
                        </Typography>
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}

export default Amountcard;