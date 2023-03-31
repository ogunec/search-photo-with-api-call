import React from 'react'

function Image({image}) {
  return (
    <div>
        <img className='imageListImg' src={image.urls.small} alt={image.alt_description}/>
    </div>
  )
}

export default Image