import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count,setCount] = useState(0);

  return (
    <div className='counter'>
        <div className="count">{count}</div>
        <div className="btns">
            <div className="button-31" onClick={()=>setCount(count+1)}>Increase</div>
            <div className="button-31" onClick={()=>setCount(count-1)}>Decrease</div>
            <div className="button-31" onClick={()=>setCount(0)}>Reset</div>
        </div>

    </div>
  )
}

export default Counter