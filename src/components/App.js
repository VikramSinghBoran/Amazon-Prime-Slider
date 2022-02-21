import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';



// console.log(count + "from the top");

  // console.log("increasing " + count);
  // console.log(props);

const App = (props) => {
  const [count,setcount] = useState(0);
  
  const increment = () =>{
    
    if(count < 4){
      setcount(1+count);
      // console.log(this);
    }
    // console.log(count);
  }

  const decrement = () =>{
    if(count > 0){
      setcount(count-1);
      // console.log(count);
    }
    
  }

  const reset = () =>{
    setcount(0);
    // console.log(count);
  }

  return (
    <>
      <h1 data-testid="title">{props.slides[count].title}</h1>
      <p data-testid="text">{props.slides[count].text}</p>  
      <button data-testid="button-prev" onClick={decrement}>Prev</button>    
      <button data-testid="button-next" onClick={increment}>Next</button>
      <button data-testid="button-restart" onClick={reset}>Restart</button>
          
    </>
  )
}


export default App;
