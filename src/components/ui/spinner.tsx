import React from 'react'

function Spinner({parentHeight} : {parentHeight: number | string}) {
  return (
    <div className='flex justify-center items-center' style={{height: parentHeight}}>
        <div className='w-10 h-10 border-8 border-primary border-t-gray-200 rounded-full animate-spin'></div>
    </div>
  )
}

export default Spinner