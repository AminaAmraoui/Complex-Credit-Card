import React from 'react';
import './App.css';
import CreditCard from './components/CreditCard'


const validThruDate = {
  month:'MM',
  year:'YY'
}

const holderInfo ={
  cardnumber:'123456789789456',
  holdername:'Amina'
}

function App() {
  return (

      <CreditCard validthru={validThruDate} holder={holderInfo}/>
  
  );
}

export default App;
