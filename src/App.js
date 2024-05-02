import './App.css';
import { BirthdayData } from './component/data';
import { useState } from 'react';
import Birthday from './component/Birthday';

function App() {
  const [birthdayData, setBirthdatData]=useState(BirthdayData)
  const dlenght=birthdayData.length
  const clickHandler=()=>{
    setBirthdatData((prevdata)=>{
      prevdata=[]
      return prevdata
    })
  }
  return (
    <div className="App">
      <h1 className='birthtxt'>{dlenght} Birthday Reminder</h1>
      <div className='birthdayContainer'>
      {birthdayData.map((birth)=>{
       
       const {id,age,img,name}=birth
       const dataTosend = {id,age,img,name,dlenght}
       return(
         <Birthday key={id} birthe={dataTosend}/>
       )
    })}
    <div className='btnContainer'>
    <button className='btn' onClick={clickHandler}>Clear</button>
    </div>
     
      </div>
       
     
    </div>
  );
}

export default App;
