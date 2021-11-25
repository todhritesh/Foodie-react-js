import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography , Grid} from '@mui/material';
import { CardMedia } from '@mui/material';
import RandomImage from '../images/website.jpg';

const Fcard = ()=>{
    return (
            <Grid item sm={6} md={4} lg={3}>
                <Card sx={{maxWidth:200}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={RandomImage}
                        alt="Paella dish"
                        sx={{objectFit:"cover",p:0.5}}
                    />
                    <CardContent>
                        <Typography variant="h6" >
                            hello
                        </Typography>
                        <Typography variant="p" >
                            $ 34.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default Fcard;