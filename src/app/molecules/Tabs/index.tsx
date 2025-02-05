"use client"
import SubHeading from '@/app/atoms/Subheading/page'
import React, { useState } from 'react'
import Modal from '../Modal'

const Tabs = ({ids , setWeek} : any) => {
  const tabs = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"]
  const [tabIndex , setTabIndex] = useState(0)
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className='grid grid-flow-col md:grid-rows-1 grid-rows-3 gap-4 py-10'>
        {tabs.map((item : any , key : number)=>{
          return (
            <div  key={key} onClick={()=>{
              setTabIndex(key)
              setWeek(key)
            }}>
              <SubHeading heading={item} classes={`text-lg text-center py-2 w-[80%]`} active={tabIndex == key && "active"} setTabIndex={setTabIndex}/>
            </div>
          )
        })}
        <button className={` text-center rounded bg-[#004370] ${tabIndex == 0 ? 'opacity-100' : 'opacity-50' } `} onClick={()=>setOpen(!open)} disabled={tabIndex == 0 ? false : true}>
          <SubHeading heading={"Add to Week"} classes={`text-lg text-center py-2 text-white`} />
        </button>
      </div>
      <Modal modalState={open} setOpen={setOpen} tabs={tabs} ids={ids}/>
    </div>
  )
}

export default Tabs
