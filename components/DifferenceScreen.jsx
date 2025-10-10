import Image from 'next/image'
import React from 'react'

const DifferenceScreen = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-20'>
        <h3 className='text-3xl'>This is how we are making a</h3>
        <Image className='' width={700} height={1} src={'/images/difference.svg'} />
    </div>
  )
}

export default DifferenceScreen