import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";


function SearchBar() {
  return (

    
    <div className=' p-[20px] flex justify-between items-center shadow-md shadow-gray-400 rounded-[20px] bg-[#ECEDEE] w-full h-[84px] ' >

        <div className=' h-[44px] w-[308px] rounded-[22px] gap-2 shadow-md shadow-gray-400  bg-white  justify-center items-center flex'>
            
            <IoSearchOutline className='  ' />

            <input className='bg-white w-[256px] h-[18px] opacity-[0.64px] rounded-xl' placeholder='Search Project'/>

        </div>

        <div className='flex text-gray-800 justify-center items-center w-[107px] h-[39px] rounded-[5px] border-2 border-[#625F6D] gap-2'>
                    <CiFilter className=' w-[16px] h-[16px] ' />
                    Filter
                    <span className=' w-[16px] h-[16px] '>
                    <MdKeyboardArrowDown />
                    </span>
        </div>

    </div>
  )
}

export default SearchBar

