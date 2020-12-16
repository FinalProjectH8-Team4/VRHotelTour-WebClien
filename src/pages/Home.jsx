import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import HotelDetail from './HotelDetail'
import { Tab, Col, Row, Nav, Container, Button } from 'react-bootstrap'

export default function Home() {
  const history = useHistory()

  function roomView(roomType) {
    history.push(`/room/${roomType}`)
  }

  return (
    <div style={{backgroundColor: '#4d3572', height: '70%'}}>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="superior">
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="superior">
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://cf.bstatic.com/images/hotel/max1024x768/107/107656497.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%" }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('superior')} block >Book This Room</Button>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="deluxe">
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://origin.pegipegi.com/jalan/images/pict1L/Y4/Y993154/X993154006.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('deluxe')} block>Book This Room</Button>
                  </div>
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="premier">
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002262-1540x1024-FIT_AND_TRIM-8e6275bc722007a72588ccc2f6d7b978.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' block>Book This Room</Button>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Row>

          <Row >
            <Col>
              <Nav variant="pills" className="flex-column text-center">
                <Nav.Item>
                  <Nav.Link eventKey="superior">Superior Room</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav variant="pills" className="flex-column text-center">
                <Nav.Item>
                  <Nav.Link eventKey="deluxe">Duluxe Room</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav variant="pills" className="flex-column text-center">
                <Nav.Item>
                  <Nav.Link eventKey="premier">Premier Twin Room</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            {/* Col-Nav END */}
          </Row>
        </Tab.Container>
      </Container>

      {/* Description */}
      <Container className='mt-5 mb-5 text-center'>
        <h3 className="mb-3">InepInn Hotel</h3>
        <div>
          <small>
            Enjoy an exceptional stay in the Jakarta city center. Boasting 343 contemporary rooms and suites in the heart of the bustling 
            financial and commercial district, our hotel offers a one-stop destination for business and holiday stays. In addition to room 
            and suite accommodation, fully equipped to meet the needs of the modern corporate and leisure traveler. 
            Featuring indoor swimming pool, Fitness and Spa, private Executive Lounge, eleven sophisticated event venues and three 
            distinctive dining and entertainment options. On your next trip to Jakarta, Indonesia, experience gracious hospitality in a convenient central location.
          </small>
        </div>
      </Container>

      <HotelDetail />
      
      <div className='mt-5 text-white p-3' style={{ width: '100%', backgroundColor: '#726191' }}>
        <div className='text-center'>
          <b>Adress</b>
          <small className='mx-1'>Jl. Senen Raya No.135, RW.2, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410  </small>
          <b>Phone</b>
          <small className='mx-1'>(021) 3442828</small>
        </div>
      </div>

    </div>
  )
}

