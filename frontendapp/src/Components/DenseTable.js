import { Paper, TableContainer,Table,TableHead,TableCell,TableRow,TableBody } from '@mui/material'
import React from 'react'
import {useSelector} from 'react-redux'

// function createData(username, email, address, phone) {
//     return { username, email, address, phone };
//   }
  
//   const rows = [
//     createData('Nilay Paul', '49paulnilay@gmail.com', 'Hasnabad', '8918527074')
//   ];

function DenseTable() {
    const users = useSelector(state=>state.users)

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell >Username</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">address</TableCell>
          <TableCell align="right">phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((row) => (
          <TableRow
            key={row.username}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.username}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{row.phonenumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DenseTable