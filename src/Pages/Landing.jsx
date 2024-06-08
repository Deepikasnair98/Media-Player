import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import settingImg from '../assets/feature1.webp'
import categoryImg from '../assets/feature2.jpg'
import historyImg from '../assets/feature3.jpg'
function Landing() {
  return (
    <>
    <div className="landingsection container">
      <div className="row align-items-center my-5">
        <div className="col-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justfy'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti obcaecati officiis vel esse voluptate eum, fugit vero minima necessitatibus natus ipsa, quisquam quas possimus! Vero, aliquid! Aliquid dolorum incidunt quis.
          VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files, and various streaming protocols.</p>
          <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className="col">

        </div>
        <div className="col-6">
          <img className='ms-5' src={landingImg} alt="landing page" />
        </div>
      </div>
      {/* features */}
    <div className="Features my-5">
      <h3 className='text-center'>Features</h3>
      <div className="row">
        <div className="col-lg-4">
        <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={settingImg} />
      <Card.Body>
      <Card.Title>Managing videos</Card.Title>
      <Card.Text>
      Users can upload, view and remove the videos.
      </Card.Text>
      </Card.Body>
      </Card>
        </div>
        <div className="col-lg-4">
        <Card className='p-2' style={{  width: '22rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={categoryImg} />
      <Card.Body>
      <Card.Title>Categorise Videos</Card.Title>
      <Card.Text>
      Users can categorise the video by drag and drop feature.
      </Card.Text>
      </Card.Body>
      </Card>
        </div>
        <div className="col-lg-4">
        <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
      <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={historyImg} />
      <Card.Body>
      <Card.Title>Managing History</Card.Title>
      <Card.Text>
      Users can manage the watch history of all videos.
      </Card.Text>
      </Card.Body>
      </Card>
        </div>
      </div>
    </div>
{/* footer */}
    <div className="row my-5 border rounded p-5">
      <div className="col-lg-5">
        <h3 className='text-warning'>Simple,Fast and Powerful</h3>
      <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias similique exercitationem.</p>
      <p><span className='fs-5 '>Categorise Video</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias similique exercitationem.</p>
      <p><span className='fs-5'>Managing History</span>:Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias similique exercitationem.</p>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
      <iframe width="100%" height="561" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>
    </div>

    </div>

    </>
  )
}

export default Landing