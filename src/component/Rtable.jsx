import React from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper ,
    TableHeaderCell
} from '@mui/material';

const Rtable = () => {
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{fontWeight:'bold',fontSize:17}} >Id</TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:17}}>Item</TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:17}}>Qty</TableCell>
                            <TableCell sx={{fontWeight:'bold',fontSize:17}}>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>Apple</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell>20</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>Mango</TableCell>
                            <TableCell>44</TableCell>
                            <TableCell>230</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>Guava</TableCell>
                            <TableCell>42</TableCell>
                            <TableCell>240</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}

export default Rtable;