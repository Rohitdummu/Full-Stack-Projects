import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data,setdata] = useState("")
  const [mat,setmat] = useState("")
  const handlechange = (e) =>{
    e.preventDefault()
    if(e.target.name==="title"){
      setdata(e.target.value)
    }
    if(e.target.name==="task"){
      setmat(e.target.value)
    }
  };
  const handlesubmit = async ()=>{
    console.log([data,mat])
    try{
        const resp = await axios.post("http://localhost:3007/createlist",{"title":data,"text":mat})
        console.log("done",resp)
    }
    catch(err){
        console.log(err)
    }
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        Add New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="message"
                autoFocus
                name="title"
                onChange={(e)=>handlechange(e)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task</Form.Label>
              <Form.Control as="textarea" name="task" onChange={(e)=>handlechange(e)} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handlesubmit(e)} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;