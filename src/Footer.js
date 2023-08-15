import React from 'react'

const Footer = () => {
    const year = new Date();
    return (
    <footer className=' sticky bottom-0 w-[100%] bg-[#15152c] text-[white] p-[1vh_3vw] rounded-t-[20px] text-[0.7rem]'>
        <p
          className='hover:scale-y-105 hover:duration-1000 hover:ease-in-out hover:transform' 
        >
          Copyright@{year.getFullYear()} Raxz | All Rights Reserved.
        </p>
    </footer>
  )
}

export default Footer