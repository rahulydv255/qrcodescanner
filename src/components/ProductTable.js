import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#000000',
      color: '#ffffff',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function ProductTable() {

    const [productData, setProductData] = useState([])

    useEffect(()=>{
        getProductDetailsbyApi();
    },[])

    
    const getProductDetailsbyApi = ()=> {
     axios.get("https://localhost:44347/api/GetProductdetail").then(
        res=> setProductData( res.data)
     ).catch(err => alert(err))
    }

  return (
    <div>
        <TableContainer component={Paper} >
        <Table sx={{minWidth:650}} aria-label="customized table">
         <TableHead>
            <StyledTableRow>
                <StyledTableCell align="center">Product Name</StyledTableCell>
                <StyledTableCell align="center">Quantity</StyledTableCell>
                <StyledTableCell align="center">Description</StyledTableCell>
                <StyledTableCell align="center">Qr Code</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Created Date</StyledTableCell>
            </StyledTableRow>
         </TableHead>
         <TableBody>
         {productData.map((item) => (
            <StyledTableRow
              key={item.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align='center' component="th" scope="row">
                {item.ProductName}
              </StyledTableCell>
              <StyledTableCell align="center">{item.Quantity}</StyledTableCell>
              <StyledTableCell align="center">{item.Description}</StyledTableCell>
              <StyledTableCell align="center">{item.QRCode}</StyledTableCell>
              <StyledTableCell align="center">{item.Price}</StyledTableCell>
              <StyledTableCell align="center">{item.CreateDate}</StyledTableCell>
            </StyledTableRow>
          ))}
         </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default ProductTable