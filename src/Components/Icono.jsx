import React from 'react'
import Image from 'next/image'

const Icono = ({src, width, height}) => {
  return (
   <Image 
   src={src}
   width={width}
   height={height}
   />
  )
}

export default Icono