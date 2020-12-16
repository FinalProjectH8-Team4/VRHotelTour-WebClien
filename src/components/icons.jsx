import React from 'react'
import ac from '../assets/ac.png'
import bar from '../assets/bar.png'
import breakfast from '../assets/breakfast.png'
import fitness from '../assets/fitness.png'
import lobby from '../assets/lobby.png'
import parking from '../assets/parking.png'
import pool from '../assets/pool.png'
import spa from '../assets/spa.png'
import toiletries from '../assets/toiletries.png'
import wifi from '../assets/wifi.png'

function Icons () {
    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={ac} alt="..."  className="mr-auto ml-auto gambar-facilities"/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Air Conditioner</h5>
                            <p className="card-text">Easy to use AC system, accurately satisfy your room's temperature preference</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={bar} alt="..."  className="mr-auto ml-auto gambar-facilities"   />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Bar</h5>
                            <p className="card-text">You'll gain access to visit the best bar in Jakarta and a free drink for every daily visit from our top rate mixologist</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={breakfast} alt="..." className="mr-auto ml-auto gambar-facilities"  />
                        </div>
                        <div className="col-md-7">  
                        <div className="card-body">
                            <h5 className="card-title">Breakfast</h5>
                            <p className="card-text">Our hotel will provide daily breakfast made by top class 5-star michelin chef.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className="row">
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={fitness} alt="..."   className="mr-auto ml-auto fitness-gambar" width="100px" height="75px"/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Fitness</h5>
                            <p className="card-text">You'll gain access to use our hi-tech fitness site and of course fitness guide by our certified fitness trainer</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={lobby} alt="..."  className="mr-auto ml-auto gambar-facilities"   />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                        < h5 className="card-title">Room Service</h5>
                            <p className="card-text">24/7 room service, anytime you want, will always be ready to do best service that you need</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={parking} alt="..." className="mr-auto ml-auto gambar-facilities"  />
                        </div>
                        <div className="col-md-7">  
                        <div className="card-body">
                            <h5 className="card-title">Parking</h5>
                            <p className="card-text">Free public parking is possible on site, without any reservation. Also there's also vallet parking</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={pool} alt="..."   className="mr-auto ml-auto fitness-gambar" width="100px" height="75px"/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">Pool</h5>
                            <p className="card-text">You can visit our big pool with your family</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={spa} alt="..."  className="mr-auto ml-auto gambar-facilities"   />
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                        < h5 className="card-title">Spa</h5>
                            <p className="card-text">You'll gain access to our spa where you can relax here and also rejuvenate yourself</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={toiletries} alt="..." className="mr-auto ml-auto gambar-facilities"  />
                        </div>
                        <div className="col-md-7">  
                        <div className="card-body">
                            <h5 className="card-title">Toiletries</h5>
                            <p className="card-text">We'll provide you some toiletries like soap, shampoo, teeth brush, also there are slippers, hairdryer and some toilet papers</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-4">
                    <div className="card mb-3 border-0" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ml-4">
                        <img src={wifi} alt="..." className="mr-auto ml-auto gambar-facilities"  />
                        </div>
                        <div className="col-md-7">  
                        <div className="card-body">
                            <h5 className="card-title">Wi-Fi</h5>
                            <p className="card-text">We have fast internet that you can access it via wi-fi</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Icons