import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const[count, setCount] = useState(0)

    useEffect( () => {
        document.title = `click ${count} times`
    })

  return (
    <div>
        <h1>counting</h1>
        <h2>{count}</h2>
      <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )
}

export default HookCounterOne
