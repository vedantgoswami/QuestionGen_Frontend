import React from 'react'

const ServerBox = ({value,ids}) => {
  return (
    <div  class="form2 center">
        <input type="text"  id={ids}
        class="input2 form2_input" autocomplete="off" placeholder=" "/>
        <label for="name" class="label2 form_label2">{value}</label>
    </div>
  )
}

export default ServerBox
