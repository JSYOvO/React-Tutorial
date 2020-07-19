import React, { Component } from 'react';
import Customer from './Components/Customer.js'
import './App.css';

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
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '유재섭2',
    'birthday' : '931206',
    'gender' : 'male',
    'job' : 'trash'
  
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '유재섭3',
    'birthday' : '931206',
    'gender' : 'male',
    'job' : 'trash'
  
  }
]

class App extends Component {
  render(){
    return(
      <div>
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
      </div>
    )
  }
}

export default App;
