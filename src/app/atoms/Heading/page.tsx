import React from 'react'

const Heading = (props : any) => {
  const {heading , para } = props
  return (
    <div className='z-[999] flex justify-center align-middle flex-col'>
        <h1 className='md:text-5xl text-3xl font-extrabold text-center'>{heading}</h1>
        <p className='text-center mt-3 md:px-0 px-5'>{para}</p>
    </div>
  )
}

export default Heading
