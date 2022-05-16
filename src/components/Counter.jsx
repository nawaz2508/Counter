import {useState} from "react"
import "./Counter.css";
import { Button } from 'react-bootstrap';


export const Counter=()=>{
  const [counter1,setCounter1] = useState(0)
  const [counter2,setCounter2]=useState(0)

  function check(val){
    setCounter1(counter1+val);
  }

  function checkCount(){
    setCounter2(counter2+1)
  }
  return(
    <div className={`${counter1%2==0 ?  "red" : "blue"}`}>
      
    <h1>Counter 1 :{counter1}</h1>
    <h1>Counter 2:{counter2}</h1>

    <Button  variant="success" onClick={()=>{
      check(1);
      checkCount();
    }}>Increment</Button>
    <span> </span>
    <Button  variant="secondary" className="mx-2" onClick={()=>{
      check(-1);
      checkCount();
    }}>Decrement</Button>
    <span> </span>
    <Button  variant="primary" onClick={()=>{
      setCounter1(0);
      setCounter2(0);
    }}>Reset
    </Button>
    </div>

  )
}