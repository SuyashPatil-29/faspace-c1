import React from 'react'

const ToggleBar = () => {
  return (
    <div className='px-5 mx-auto mt-[155px] md:mt-[170px] md:py-2 flex items-center justify-center w-screen bg-white mb-5'>

        <div className='flex items-center w-[612px] h-[66px] justify-between rounded-2xl border-2 p-4'>

        <div className='md:flex flex-row items-center justify-between gap-3'>
          <h3 className='md:border-r-[1px] pr-[10px] border-gray-300 font-semibold'>Display total price</h3>

          <h3 className=' text-gray-500'>Includes all fees, before taxes</h3>
        </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer"></input>
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-black after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
          </label>

        </div>

    </div>
  )
}

export default ToggleBar