import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import HotelDetail from './HotelDetail'
import { Tab, Tabs, Col, Row, Nav, Container, Button } from 'react-bootstrap'

export default function Home() {
  const history = useHistory()

  function roomView(roomType) {
    history.push(`/room/${roomType}`)
  }

  return (
    <div>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="superior">
          <Row>
            <Tab.Content>
              {/* Tab Pane bisa di looping */}
              <Tab.Pane eventKey="superior">
                <h1 className='text-center'>SUPERIOR CLASS</h1>
                <hr />
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://cf.bstatic.com/images/hotel/max1024x768/107/107656497.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%" }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('superior')} block>360 View</Button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="deluxe">
                <h1 className='text-center'>DELUXE CLASS</h1>
                <hr />
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://origin.pegipegi.com/jalan/images/pict1L/Y4/Y993154/X993154006.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%" }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('deluxe')} block>360 View</Button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="premier">
                <h1 className='text-center'>PREMIER TWIN CLASS</h1>
                <hr />
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'relative' }}>
                    <img src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10002262-1540x1024-FIT_AND_TRIM-8e6275bc722007a72588ccc2f6d7b978.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" class="d-block w-100" alt="..." style={{ height: 400, width: "100%" }} />
                  </div>
                  <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' block>360 View</Button>
                  </div>
                </div>
              </Tab.Pane>
              {/* Tab Pane END */}
            </Tab.Content>
          </Row>
          <Row>
            {/* Col-Nav bisa di looping */}
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
        <h3 className="mb-3">Lumire Hotel And Convention Center</h3>
        <div>
          <small>
            Enjoy an exceptional stay in the Jakarta city center at Lumire Hotel and Convention Center. Boasting 343 contemporary rooms and suites in the heart of the bustling Senen financial and commercial district, our 4-star hotel offers a one-stop destination for business and holiday stays. From the hotel, it’s just a 10-minute drive to Government Offices, Business District, Chinatown and a short walk to the National Monument (Monas) and Mall.
            In addition to room and suite accommodation, fully equipped to meet the needs of the modern corporate and leisure traveler. Featuring a Balinese-style indoor swimming pool, Fitness and Spa, private Executive Lounge, eleven sophisticated event venues and three distinctive dining and entertainment options.
            On your next trip to Jakarta, Indonesia, experience gracious hospitality in a convenient central location. We look forward to welcoming you to Lumire Hotel and Convention Center Jakarta.
          </small>
        </div>
      </Container>

      <HotelDetail />
      
      <Container className='bg-dark mt-5 text-white p-3'>
        <div className='text-center'>
          <b>Adress</b>
          <small className='mx-1'>Jl. Senen Raya No.135, RW.2, Senen, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10410  </small>
          <b>Phone</b>
          <small className='mx-1'>(021) 3442828</small>
        </div>
      </Container>

    </div>
  )
}

