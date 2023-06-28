import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({item, index}) => {

  const saveToClipboard = async () => {
    if(navigator.clipboard) {
      try {
       await navigator.clipboard.writeText( `#${hex}`);
       toast.success('Color copied to clipboard');
  
      }catch (err) {
        toast.error('Failed tp copy color to clipboard')
  
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }

    console.log(index)
    const {weight, hex} = item
  return (
    <div className={index > 10 ? 'p-12 flex flex-col text-left text-white' : 'p-12 flex flex-col text-left text-black' } style={{backgroundColor : `#${hex}`, cursor : 'pointer'}}
    onClick={saveToClipboard}
    >
        <h3 className=' text-base font-medium'>{weight}%</h3>
        <p className=' text-base font-medium'>{hex}%</p>
    </div>
  )
}

export default SingleColor