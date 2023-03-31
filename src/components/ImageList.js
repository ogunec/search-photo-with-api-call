import React from 'react'
import Image from './Image'
import '../App.css';

function ImageList({imagesPlaceholder}) {
  return (
    <div className='imageList'>
        {imagesPlaceholder.map((image, index) => {
            return <Image key={index} image={image}/>
        })}
    </div>
  )
}

export default ImageList