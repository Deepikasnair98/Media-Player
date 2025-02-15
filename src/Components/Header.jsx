import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
     <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder py-2' >
     <Navbar.Brand style={{color:'white'}} className='fs-5'>
      <i className="fa-solid fa-music me-2"></i>
        Media Player
      </Navbar.Brand>
      </Link>
    </Container>
  </Navbar>
     
    
   
  )
}

export default Header