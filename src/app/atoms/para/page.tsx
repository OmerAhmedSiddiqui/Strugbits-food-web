import React from 'react'

const Para = (props : any) => {
    const { para , classes } = props
  return (
      <p className={`${classes} `} >{para}</p>
  )
}

export default Para
