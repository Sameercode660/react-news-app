import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
  return (
    <div className='container d-flex justify-content-between' style={{textAlign : 'center'}}>
        <img src={spinner} alt="" style={{marginLeft : '45%'}}/>
    </div>
  )
}

