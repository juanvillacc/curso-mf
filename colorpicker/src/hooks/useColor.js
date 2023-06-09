import {useState}  from 'react'

export const useColor = () => {
    const [colorsList, setColorList] = useState([])
    const [color, setColor] = useState("#000000")
  
    
  
    const handelSaveColor = (e)=> {
      e.preventDefault();    
      const list = [color, ...colorsList]
      setColorList(list);
      console.log(list);
    }
  
    const handelPickerChanges = (e)=> {
      e.preventDefault();
      setColor(e.target.value);        
    }
  
    return {color, colorsList, handelSaveColor, handelPickerChanges}
}