import React from 'react'
import CategorySlider from './CategorySlider'
import Tasks from "./Tasks"

function Body() {
  return (
    <div className=' gap-[40px] flex'>

        <CategorySlider/>

        <Tasks/>

    </div>
  )
}

export default Body