import {useState} from "react";
const Counter =()=> {
    const [count, setCount] = useState(0);
    const [Rcounter, setrCounter] =useState(10);

    return (
        <div>
            <h1>Counter:{count}</h1>
            <h2>R Counter : {Rcounter}</h2>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setrCounter(Rcounter-1)}>R Counter</button>
        </div>
    )
}


export default Counter;