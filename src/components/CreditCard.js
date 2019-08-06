import React, {Component} from 'react'
import './CreditCard.css'
import './Form.css'

class CreditCard extends Component {

/******* Constructor ******/
  constructor(props) {
    super(props)
    this.state = {
      validthru: props.validthru,
      holder: props.holder,
      nameinput:false,
      numberinput:false,
      numberinputmin:false,
      dateinput:false
    }   
}

/******* Change Name Method ******/
changename =(event) => {
 
  this.setState({
    holder: {
          ...this.state.holder,
          holdername: event.target.value
    }
})
if(event.target.value.length>=20){
  this.setState({nameinput:true})
  return
}
}

/******* Change Number Method ******/
changenumber =(event) => { 
  
  this.setState({
    holder: {
          ...this.state.holder,
          cardnumber: event.target.value
    }
})

event.target.value.length===16 ? this.setState({numberinputmin:false}) : this.setState({numberinputmin:true})
  if(event.target.value.length>=16){
    this.setState({numberinput:true})
    return
  }
}

/******* Change ValidThru Method ******/
changevalidthru =(event) => {
  
  
  event.target.value.length<=2 ? this.setState({validthru: {
                                        ...this.state.validthru,
                                        month: event.target.value
                                  }}) : this.setState({validthru: {
                                          ...this.state.validthru,
                                          year: event.target.value.slice(3)
                                      }})
  
event.target.value.length===2 && (event.target.value=event.target.value.concat('/'))

if (event.target.value.length>=5){
  this.setState({dateinput:true})
  return
}

}

/******* 1111111111111111  => 1111 1111 1111 1111 ******/
 renderCardNumber = (number) => {
  number = number.toString()
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return resultStr.trim()
}



/******* Render ******/
render() {
  return <div className="container">
  <div className="card">
  <div className="header-card">
    <h1>Credit Card</h1>
    <img src={require('../img/chip.jpg')}/>
  </div>
  <div className="content-card">
    <div className="holder">
      <div><p className="tight-p">{this.renderCardNumber(this.state.holder.cardnumber)||this.renderCardNumber(123456789789456)}</p></div>
      <div className="holder-info">
        <div className="holder-info-left">
          <h2>{this.state.holder.holdername.toUpperCase()||'Amina'}</h2>
        </div>
        <div className="holder-info-right">
          <div className="valid-thru">
            <p>VALID<br/>THRU</p>
          </div>
          <div className="valid-date">
            <p>MONTH/YEAR</p>
            <h2>{this.state.validthru.month ||'MM'}/{this.state.validthru.year || 'YY'}</h2>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img src={require('../img/mastercard.jpg')}/>
    </div>
  </div>
  </div>


  <div className="form-card">
    <input  type="text" 
            placeholder='Card Number'  
            name="cardnumber" 
            id="cardnumber" 
            className="input-class"
            disabled={this.state.numberinput}
            style={{color:this.state.numberinputmin?'red':'#34695b'}}
            onChange={(event) => this.changenumber(event)} />

    <input  type="text" 
            placeholder='Holder Name' 
            name="holdername" 
            id="holdername" 
            className="input-class"
            disabled={this.state.nameinput}
            onChange={(e)=>this.changename(e)}/>

    <input  type="text" 
            placeholder='MM/YY' 
            name="datecard" 
            id="datecard" 
            className="input-class"
            disabled={this.state.dateinput}
            onChange={(e)=>this.changevalidthru(e)}/>
  </div>
  </div>
}

}


export default CreditCard