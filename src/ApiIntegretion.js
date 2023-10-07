import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ApiIntegretion = () => {
    const [data,setData]= useState([{id:0,name:'none',userName:'none',email:'nonee',phone:'nill'}])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    })
  return (
    <div className='container'>
        <div className='row'>
        {
            data.map((user)=>{
                return(
                    
            <div className='col-4 mt-5 ms-3'> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.userName}</Card.Title>
        <Card.Text>
        <h2>{user.name}</h2>
        <p>Email:{user.email}</p><br></br>
        <p>Phone:{user.phone}</p>
        </Card.Text>
        
      </Card.Body>
    </Card></div>
                 
                )
            })
        }
          </div> 
    </div>
  )
}

export default ApiIntegretion