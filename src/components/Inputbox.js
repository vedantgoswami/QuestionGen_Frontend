import React from 'react'

const Inputbox = ({value,ids}) => {
  return (
    
    <div style={{width: "50%"}} class="form">
        <textarea type="text"  id={ids}
        class="input form_input" autocomplete="off" placeholder=" "/>
        <label for="name" class="label form_label">{value}</label>
    </div>
  )
}

export default Inputbox