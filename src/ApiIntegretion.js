import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';

const ApiIntegretion = () => {
    const [data,setData]= useState([{id:0,name:'none',userName:'none',email:'nonee',phone:'nill'}])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    },[])
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-5'>Users List</h2>
        <div className='row mx-auto'>
        {
            data.map((user)=>{
                return(
                    
            <div className='col-5 me-5 mt-5'> <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text className='text-center'>
       {user.name}        <br></br>
        Email:{user.email}<br></br>
        Phone:{user.phone}<br></br>
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