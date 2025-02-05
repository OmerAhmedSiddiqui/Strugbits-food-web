import React from 'react'

const SubHeading = (props : any) => {
    const { heading , classes ,active  } = props
  return (
      <h2 className={`text-3xl font-extrabold text-left ${classes}  ${active ? 'border-b-4 border-[#004370] text-[#004370]' : ""}`} >{heading}</h2>
  )
}

export default SubHeading
