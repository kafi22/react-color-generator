import { useState } from "react";
import ColorList from "./Component/ColorList";
import Form from "./Component/Form";
import Values from 'values.js';
import { ToastContainer, toast } from "react-toastify";

const App = () => {

  const [colors, setColors] = useState(new Values('#f15025').all(10))


  const getColors = (color) => {

    try {
      const getColor = new Values(color).all(10)
      setColors(getColor)
      toast.success('Awesome color')
    } catch (err) { 
      toast.error(err.message)

    }
    
  }


  return (
    <div className=" container mx-auto p-4">
      <Form getColors={getColors} />
      <ColorList colors={colors} />
      <ToastContainer />
    </div>
  )
}

export default App;