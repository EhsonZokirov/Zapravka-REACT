import { Button } from '@mui/material'
import React from 'react'

function FivthSection() {
  return (
    <div>
        <div className="text-center">
            <p>Pricing</p>
            <h1 className="font-bold md:text-[30px]">A plan for every need.</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
        </div>
        <div className='grid md:grid-cols-3 '>
            <div className='text-[#0278ED] text-[1.5em] bg-[#F2F2F2] rounded-lg m-auto my-5 w-[70%] md:w-[80%] text-center py-10 space-y-5'>
                <p>Standard</p>
                <h1 className='text-[80px]'>$9</h1>
                <p className='text-black'>Monthly</p>
                <Button variant='contained'>Buy now</Button>
            </div>
            <div className='text-[#FF5437] text-[1.5em] bg-[#F2F2F2] rounded-lg m-auto my-5 w-[70%] md:w-[80%] text-center py-10 space-y-5'>
                <p>Premium</p>
                <h1 className='text-[80px]'>$99</h1>
                <p className='text-black'>Monthly</p>
                <Button variant='contained' color='error'>Buy now</Button>
            </div>
            <div className='text-[#FF9209] text-[1.5em] bg-[#F2F2F2] rounded-lg m-auto my-5 w-[70%] md:w-[80%] text-center py-10 space-y-5'>
                <p>Lifetime</p>
                <h1 className='text-[80px]'>$149</h1>
                <p className='text-black'>Monthly</p>
                <Button variant='contained' color='warning'>Buy now</Button>
            </div>
        </div>
    </div>
  )
}

export default FivthSection