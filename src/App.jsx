import React, { useEffect, useEffectEvent, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);


  const countControl = useEffectEvent(()=>{
    setCount(count + 1);
  })
  useEffect(() => {
    const internal = setInterval(() => {
      countControl()
    }, 1000);
    console.log(internal);
    
    return ()=>clearInterval(internal)
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
