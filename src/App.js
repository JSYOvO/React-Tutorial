import React, { Component } from 'react';
import Customer from './Components/Customer.js'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => (
  { 
    root : {
      width : '100%',
      marginTop : theme.spacing(3),
      overflowX : "auto"
    },
    table : {
      minWidth : 1080
    }
  }
)

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '유재섭',
    'birthday' : '931206',
    'gender' : 'male',
    'job' : 'trash'
  
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any2',
    'name' : '유재섭2',
    'birthday' : '931206',
    'gender' : 'male',
    'job' : 'trash'
  
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any3',
    'name' : '유재섭3',
    'birthday' : '931206',
    'gender' : 'male',
    'job' : 'trash'
  
  }
]

class App extends Component {
  render(){
    const {classes} = this.props;
    return(
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(data => {
              return (
                <Customer 
                  key = {data.id}
                  id = {data.id}
                  image = {data.image}
                  name = {data.name}
                  birthday = {data.birthday}
                  gender = {data.gender}
                  job = {data.job}
                />
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
