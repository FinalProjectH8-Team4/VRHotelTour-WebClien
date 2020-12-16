import React from 'react'

// image
import iconAC from '../assets/ac.png'
import iconBar from '../assets/bar.png'
import iconBreakfast from '../assets/breakfast.png'
import iconFitness from '../assets/fitness.png'
import iconLobby from '../assets/lobby.png'
import iconParking from '../assets/parking.png'
import iconPool from '../assets/pool.png'
import iconSpa from '../assets/spa.png'
import iconToiletries from '../assets/toiletries.png'
import iconWifi from '../assets/wifi.png'
import iconOther from '../assets/other.png'

export default function FacilitiesIcon(props) {
  const { name, index, facilitiesClick } = props
  console.log(name.match(/lobby/i), '<<ini console')

  if (name.match(/lobby/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconLobby} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }

  else if (name.match(/restaurant|breakfast/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconBreakfast} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }

  else if (name.match(/bar|caffe|longue/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconBar} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }

  else if (name.match(/pool|swim/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconPool} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }

  else if (name.match(/fitness/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconFitness} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }

  else if (name.match(/lobby/i) !== null) {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconLobby} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }
  else {
    return (
      <div className='text-center' style={{ width: '110px' }}>
        <div className='inepinn-color p-1 mx-auto' onClick={() => facilitiesClick(index)} style={{ width: '80px', height: '80px', borderRadius: 10, cursor:'pointer' }}>
          <img className='black-white img-fluid' src={iconOther} alt="..." />
        </div>
        <small style={{fontWeight: 'bold'}} className='mt-3'>{name}</small>
      </div>
    )
  }
}