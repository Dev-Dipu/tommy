import React from 'react'

const WonderScreen = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="w-2/5 h-full bg-[url('/images/wonder.svg')] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center">
            <h2 className='text-4xl'>Wodering how we can help?</h2>
            <h3 className='text-3xl w-3/5 text-center mt-10'>Book a meeting or get in touch for a tailored solution.</h3>
            <button className='px-4 py-2 text-white bg-gradient-to-tr from-[#B586E0]/25 to-[#661CA9]/25 border border-[#CF7CFF] cursor-pointer mt-4.5'>book a meeting</button>
        </div>
    </div>
  )
}

export default WonderScreen