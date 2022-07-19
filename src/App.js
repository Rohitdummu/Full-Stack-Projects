import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Card, Row, Col, Container} from 'react-bootstrap';
import Example from './create';
import New from './upadatetask';
  

function App(){
  const [task,settask] = useState([])
  const [nt, setnt] = useState([])
  const [flg,setflg] = useState(false)
  useEffect(()=>{
     axios.get("http://localhost:3007/getlist").then((res)=>{
      settask(res.data.filter((item)=>item.completion===false))
      setnt(res.data.filter((item)=>item.completion===true))
     }).catch((err)=>console.log(err))
  })
  // console.log(task)
  const handledelete=(e,a)=>{
    e.preventDefault()
    axios.post(`http://localhost:3007/deletelist/${a}`).then((res)=>setflg(res.data.status)).catch((err)=>console.log(err))
  }
  const handlecompletion = async (e,a)=>{
    try{
       await axios.post(`http://localhost:3007/updatelist/${a}`,{"completion":!flg})
  }
  catch(err){
      console.log(err)
  }
  }
  const handleincompletion = async (e,a)=>{
    try{
       await axios.post(`http://localhost:3007/updatelist/${a}`,{"completion":flg})
  }
  catch(err){
      console.log(err)
  }
  }
  return(
    <div >
      <Container  >
        <Row className="justify-content-center">
          <Col>
          <h1 className="text-center text-md-right">Your Tasks</h1>
          <Example />
          </Col>
        </Row>
    <Row xs={1} md={3} className="g-4">
    {
          task.map((item)=>(
            <Col key={item._id}>
            <React.Fragment>
                <Card bg="success" text="white">
                <Card.Header>On Going Task</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.text}
                      </Card.Text>
                      {/* <Button variant="info" onClick={(e)=>handleupdate(e,item._id)}>Update</Button>  */}
                      <New data={item} />
                      <Button variant="danger" className="mx-4" onClick={(e)=>handledelete(e,item._id)}>Delete</Button>
                      <Button variant="warning" onClick={(e)=>handlecompletion(e,item._id)}>Move To Complete</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
            </Col>
          ))
        }
    </Row>
    </Container>
    <Container >
      <Row className="my-3">
          <Col>
          <h1 className="text-center text-md-right">Completed Tasks</h1>
          </Col>
    </Row>
    <Row xs={1} md={3} className="g-4" >
    {
          nt.map((item)=>(
            <Col key={item._id}>
            <React.Fragment>
                <Card bg="warning" >
                <Card.Header>Completed Task
                </Card.Header>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.text}
                      </Card.Text>
                      {/* <Button variant="info" onClick={(e)=>handleupdate(e,item._id)}>Update</Button>  */}
                      <New data={item} />
                      <Button variant="danger" className="mx-4" onClick={(e)=>handledelete(e,item._id)}>Delete</Button>
                      <Button variant="primary" onClick={(e)=>handleincompletion(e,item._id)}>Move To Task</Button>
                    </Card.Body>
                </Card>
            </React.Fragment>
            </Col>
          ))
        }
    </Row>
      </Container>
    </div>
  )
}


export default App;