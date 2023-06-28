import React from 'react'
import SingleColor from './SingleColor'

const ColorList = ({colors}) => {

    const getAllColor = () => {

        let color = colors.map((item, index) => {
       
           return   <SingleColor key={index} item={item} index={index} />
        })

        return color
    }

  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 justify-between items-stretch my-6'>
     {getAllColor()}
    </div>
  )
}

export default ColorList