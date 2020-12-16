import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import HotelDetail from './HotelDetail'
import { Tab, Col, Row, Nav, Container, Button } from 'react-bootstrap'

export default function Test () {
    const history = useHistory()

    function roomView(roomType) {
        history.push(`/room/${roomType}`)
    }

    return (
        <div>
            <div 
                style={{
                    backgroundImage: 
                    `linear-gradient(to left, rgba(245, 246, 252, 0.52), rgba(82, 58, 115, 1),rgba(35, 8, 53, 1), rgba(35, 8, 53, 1)),
                    url('https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`, 
                    height: '70vh', 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundAttachment:"fixed"
            }}> 
                <Tab.Container id="left-tabs-example" defaultActiveKey="superior">
                <div className="row">
                    <div className="col-8 ml-5 mt-3">
                        <Tab.Content>
                            <Tab.Pane eventKey="superior">
                                <div style={{ position: 'relative' }}>
                                    <div>
                                        <img src="https://hdrihaven.com/files/hdri_images/tonemapped/1500/hotel_room.jpg" class="d-block w-100" alt="..." style={{ height: 400, borderRadius:10 }} />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                        <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('superior')} block style={{height: "100%", opacity: 0.7, color: '#241535'}}>Book This Room</Button>
                                    </div>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="deluxe">
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src="https://www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                        <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('deluxe')} block style={{height: "100%", opacity: 0.7, color: '#241535'}}>Book This Room</Button>
                                    </div>
                                </div>
                            </Tab.Pane>

                            <Tab.Pane eventKey="premier">
                                <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src="https://1.bp.blogspot.com/-BCozCFZE7pg/XDIP0rJPFcI/AAAAAAAAAO0/vSFFbJgHKRcXDSiUCURHp41Eaix91qMyQCKgBGAs/s1600/HDRI-Hotel-Room.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                        <Button type='button' variant="outline-light" size='lg' className='fw-bold' block style={{height: "100%", opacity: 0.7, color: '#241535'}}>Book This Room</Button>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                    <div className="col-3 mt-3">
                        <Nav variant="pills" className="flex-column text-center">
                            <Nav.Item >
                                <Nav.Link eventKey="superior" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Superior Room
                                    <p style={{fontSize: 12, textAlign: 'justify', marginTop: 10}}>Decorated in a modern style, our Superior Rooms offer free WiFi, Smart TVs, writing desks and in-room tea and coffee making facilities.</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav variant="pills" className="flex-column text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="deluxe" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Duluxe Room
                                <p style={{fontSize: 12, textAlign: 'justify'}}>Deluxe rooms are modern decorated, totally soundproofed and equipped with high speed internet access, USB ports , smart TV, room cleaning touch system.</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    
                        <Nav variant="pills" className="flex-column text-center">
                            <Nav.Item>
                                <Nav.Link eventKey="premier" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Premier Twin Room
                                    <p style={{fontSize: 12, textAlign: 'justify'}}>Designed for families, our expansive and luxuriously appointed Premier Twin Rooms. With two double beds that can accommodate up to 2 adults and 2 children.</p>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                </Tab.Container>
            </div>
            <HotelDetail />
        </div>
    )
}