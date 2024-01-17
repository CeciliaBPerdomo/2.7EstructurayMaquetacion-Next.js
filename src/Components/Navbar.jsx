import React from 'react'
import Icono from './Icono'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between py-4 px-6 bg-green-500'>

        <Icono src={"./next.svg"} width={50} height={50}/>
        <p className='font-mono text-xl'>Maquetación y estructura</p>
    </div>
  )
}

export default Navbar