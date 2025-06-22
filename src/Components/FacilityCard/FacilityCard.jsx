import React from 'react'
import './FacilityCard.css'

const FacilityCard = ({icon,title,description}) => {
  return (
    <div className='facility-card move-up-transition'>
              <img src={ icon } alt='icon'/>
      <div className='text-icon-wrapper'>
        <h4 className='title'>{ title }</h4>
      <p className="description">
        { description }
      </p>
      </div>
    </div>
  )
}

export default FacilityCard