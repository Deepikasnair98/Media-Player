import { Modal ,Button , Form ,FloatingLabel} from 'react-bootstrap'
import React, { useState } from 'react'

function Add() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-flex align-items-center">
      <h5>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder'>+</button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p> Please Fill the following details!!!</p>
       <div className='p-3 border rounded'>
       <FloatingLabel controlId="floatingInputCaption" label="Video Caption" className="mb-3">
        <Form.Control type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3">
        <Form.Control type="text" placeholder="Image URL" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInputUrl" label="Youtube URL" className="mb-3">
        <Form.Control type="text" placeholder="Youtube URL" />
      </FloatingLabel>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add