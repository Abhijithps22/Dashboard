import React from 'react'
import Header from './Header'
import Roomtype from './Roomtype'
import Taxontarrif from './Taxontarrif'

const RoutetypeMaster = () => {
  return (
    <div className='m-3'>
        <Header/>
        <Roomtype/>
        <Taxontarrif/>
    </div>
  )
}

export default RoutetypeMaster