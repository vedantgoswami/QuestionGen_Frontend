import React from 'react'

const Inputdaba= ({value}) => {
  return (
    
    <div class="formd">
        <input type="text"  id={value}
        class="inputd form_inputd" autocomplete="off" placeholder=" "/>
        <label for="name" class="labeld form_labeld">{value}</label>
    </div>
  )
}

export default Inputdaba