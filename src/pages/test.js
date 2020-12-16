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
        <div 
            style={{
                backgroundImage: 
                `linear-gradient(to top left, rgba(245, 246, 252, 0.52), rgba(55, 35, 91, 1)),
                url('https://images.pexels.com/photos/1662159/pexels-photo-1662159.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`, 
                height: '75vh', 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
                backgroundAttachment:"fixed"
        }}> 
            <Tab.Container id="left-tabs-example" defaultActiveKey="superior">
            <div className="row">
                <div className="col-8 ml-5 mt-5">
                    <Tab.Content>
                        <Tab.Pane eventKey="superior">
                            <div style={{ position: 'relative' }}>
                                <div>
                                    <img src="https://hdrihaven.com/files/hdri_images/tonemapped/1500/hotel_room.jpg" class="d-block w-100" alt="..." style={{ height: 400, borderRadius:10 }} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('superior')} block >Book This Room</Button>
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="deluxe">
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src="https://www.samrohn.com/wp-content/uploads/le-meridien-bedroom-panorama.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' onClick={() => roomView('deluxe')} block>Book This Room</Button>
                                </div>
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="premier">
                            <div style={{ position: 'relative' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src="https://1.bp.blogspot.com/-BCozCFZE7pg/XDIP0rJPFcI/AAAAAAAAAO0/vSFFbJgHKRcXDSiUCURHp41Eaix91qMyQCKgBGAs/s1600/HDRI-Hotel-Room.jpg" class="d-block w-100" alt="..." style={{ height: 400, width: "100%", borderRadius:10 }} />
                                </div>
                                <div className='d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 0, zIndex: 99, width: '100%', height: '100%' }}>
                                    <Button type='button' variant="outline-light" size='lg' className='fw-bold' block>Book This Room</Button>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </div>

                <div className="col-3 mt-5">
                    <Nav variant="pills" className="flex-column text-center">
                        <Nav.Item >
                            <Nav.Link eventKey="superior" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Superior Room
                                <p style={{fontSize: 12, textAlign: 'justify', marginTop: 10}}>Decorated in a modern style, our Superior Rooms offer free WiFi, Smart TVs, writing desks and in-room tea and coffee making facilities.</p>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav variant="pills" className="flex-column text-center">
                        <Nav.Item>
                            <Nav.Link eventKey="deluxe" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Duluxe Room</Nav.Link>
                        </Nav.Item>
                    </Nav>
                   
                    <Nav variant="pills" className="flex-column text-center">
                        <Nav.Item>
                            <Nav.Link eventKey="premier" style={{height: 125, textAlign: 'left', marginBottom: 10}}>Premier Twin Room</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </div>
            </div>
            </Tab.Container>
        </div>
    )
}