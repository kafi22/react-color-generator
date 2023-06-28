import React, { useState } from 'react';


const Form = ({getColors}) => {

   const [colors, setColor] =  useState('')

   const handelForm = (e) => {
    e.preventDefault();
    getColors(colors)
   }
  return (
    <div className=' max-w-lg my-4 mx-auto text-center flex flex-col justify-center items-center space-y-4'>
        <h2 className=' text-3xl text-gray-500 tracking-wider leading-6'>Color Generator</h2>

        <form action="" className=' flex gap-3' onSubmit={handelForm}>
            <input type="color" name="" id=""  value={colors}
            className=' h-[40px] rounded-md'
            onChange={e => setColor(e.target.value)}
            />
            <input type="text" 
            className=' bg-slate-100 p-2 '
            name='colors'
            value={colors}
            onChange={e => setColor(e.target.value)}
            placeholder='#f15025'
            />
            <button type='submit' style={{backgroundColor : colors ? `${colors}` : '#000'}} className={colors ? 'py-2 px-4 rounded-md shadow-md text-white' : 'py-2 px-4 rounded-md shadow-md text-white'}>Generator</button>
        </form>
    </div>
  )
}

export default Form