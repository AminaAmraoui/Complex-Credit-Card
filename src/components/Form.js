import React from 'react'
import './Form.css'

const FormCard = () =>
  <div className="form-card">
    <input  type="text" 
            placeholder='Card Number'  
            name="cardnumber" 
            id="cardnumber" 
            class="input-class"
            onChange={(event) => {console.log(event.target.value)}} />

    <input  type="text" 
            placeholder='Holder Name' 
            name="holdername" 
            id="holdername" 
            class="input-class"/>

    <input  type="text" 
            placeholder='MM/YY' 
            name="datecard" 
            id="datecard" 
            class="input-class"/>
  </div>

  export default FormCard