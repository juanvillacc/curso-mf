import React  from 'react'


const Colorpicker = ({handelSaveColor, handelPickerChanges, color }) => {
  
 
 
  return (
    <form onSubmit={handelSaveColor}> 
      <input type="color" className='form-control' styles={{
        width:"100%",
        height: "300px"        
      }}
        onChange={handelPickerChanges}
      />
      <div className='text-center' >
            <h2>
                {color}
            </h2>
            <button type='submit' className='btn btn-success'> Save color</button>
      </div>
      
    </form>
  )
}

export default Colorpicker
