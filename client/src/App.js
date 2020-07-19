import React, { Component } from 'react';
import Customer from './Components/Customer.js'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress'
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
    },
    progress : {
      marginTop : theme.spacing(3)
    }
  }
)

class App extends Component {
  state = {
    customers : "",
    completed : 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err))
  }
  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  progress = () => {
    const {completed} = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1});
  }

/* React-JS Life-Cycle
    1. constructor()
    2. componentWillMount()
    3. render()
    4. componentDidMount()
    if) props or state changed => shouldComponentUpdate()
*/

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
            {this.state.customers ? this.state.customers.map(data => {
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
            }) : 
            <TableRow>
              <TableCell colspan = "6" align =  "center">
                <CircularProgress 
                  className = {classes.progress} 
                  varient = "determinant"
                  value = {this.state.completed}
                  color = "secondary"
                />
              </TableCell>
            </TableRow>}
            
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
