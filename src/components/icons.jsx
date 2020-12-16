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
        <div className="ml-4">
            <div className="row mt-3 ml-3" style={{flexShrink: 0, paddingRight: "calc(var(--bs-gutter-x)/ 2)"}}>
                <img src={ac} alt="" className="gambar-facilities"/>
                <img src={bar} alt="" className="gambar-facilities"/>
                <img src={breakfast} alt="" className="gambar-facilities"/>
                <img src={fitness} alt="" className="fitness-gambar"/>
                <img src={wifi} alt="" className="gambar-facilities"/>
            </div>
            <div className="row mt-3 ml-2" style={{flexShrink: 0, paddingRight: "calc(var(--bs-gutter-x)/ 2)"}}>
                <img src={lobby} alt="" className="mr-2 gambar-facilities"/>
                <img src={parking} alt="" className="mr-2 gambar-facilities"/>
                <img src={pool} alt="" className="mr-2 gambar-facilities"/>
                <img src={spa} alt="" className="mr-2 gambar-facilities"/>
                <img src={toiletries} alt="" className="mr-2 gambar-facilities"/>
            </div>
        </div>
    )
}

export default Icons