import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div>
            <nav className='w-[100%] flex justify-between items-center p-[20px] bg-white fixed z-10'>
                <div className='flex'>

                <div>
                    <img className='h-[35px]' src="src/images/logo.jpg" alt="" />
                </div>
                <div className='text-center ml-[10px] w-[300px] border rounded-full'>
                <SearchIcon/>
                    <input className='w-[90%] p-[5px] text-sm rounded-full outline-none' type="text border-none"
                        placeholder='Search by Skill, Industry or Company' />
                </div>
                </div>
                <div className='flex'>
                    <h1 className=' text-sm mr-[20px] text-[#333]'>For Business</h1>
                    <button className=' text-xs font-semibold py-[5px] px-[12px] bg-[#007bff] text-white border-none rounded cursor-pointer'
                    >Host</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar;