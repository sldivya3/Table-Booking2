import React from 'react'

const ImageSlider = ({image,width,height}) => {
  return (
    <div >
      <img src={image} alt="" width={width} height={height} className='rounded-2xl hidden lg:block md:block ' />
    </div>
  )
}

export default ImageSlider
