import React from 'react'

const Search = () => {
    return (
        <div>
            <section className='w-[100%] mt-[75px] h-16 flex items-center bg-white border-t-[1px] fixed z-10'>
                <select className='text-xs h-9 font-normal outline-none border-2 rounded-full ml-[50px]'>
                    <option>Sort By</option>
                    <option>Rating(high to low)</option>
                    <option>Experience (High to Low)</option>
                    <option>Price (Low to High)</option>
                    <option>price(high to low)</option>
                </select>
                <button className=' px-6 h-9 text-xs font-normal outline-none border-2 rounded-full ml-[20px]' 
                id="fill">Filters</button>
                <div className='hidden p-[20px] rounded-lg'>
                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="category">Category</label>
                        <input type="text" id="category" placeholder="Search" />
                    </div>
                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="skills">Skills</label>
                        <div>
                            <label className='block mb-[5px] '>
                                <input type="checkbox" />
                                Business And Management
                            </label>
                            <label className='block mb-[5px]'>
                                <input type="checkbox" />
                                Engineering, Technology & Data
                            </label>
                            <label className='block mb-[5px]'>
                                <input type="checkbox" />
                                General
                            </label>
                            <label className='block mb-[5px]'>
                                <input type="checkbox" />
                                Product & Design
                            </label>
                        </div>
                    </div>

                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="organisation">Organisation</label>
                        <input type="text" id="organisation" />
                    </div>

                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="price">Price</label>
                        <input type="text" id="price" />
                    </div>

                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="work-experience">Work Experience</label>
                        <input type="text" id="work-experience" />
                    </div>

                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="language">Language</label>
                        <input type="text" id="language" />
                    </div>

                    <div className='mb-[15px]'>
                        <label className='block mb-[5px]' htmlFor="available-days">Available Days</label>
                        <input type="text" id="available-days" />
                    </div>

                    <div className='text-right mt-[20px]'>
                        <button>Clear Filter</button>
                        <button>Apply Filter →</button>
                    </div>
                </div>
                <button className=' px-6 h-9 text-xs font-normal outline-none border-2 rounded-full ml-[20px]' >Skills</button>
                <button className=' px-6 h-9 text-xs font-normal outline-none border-2 rounded-full ml-[20px] ' >Price</button>
                <button className=' px-6 h-9 text-xs font-normal outline-none border-2 rounded-full ml-[20px]' >Availability</button>
                <button className=' px-6 h-9 text-xs font-normal outline-none border-2 rounded-full ml-[20px]' >Top Mentors</button>
            </section>
        </div>
    )
}

export default Search