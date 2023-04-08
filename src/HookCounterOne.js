import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect( () => {
        console.log('updating document title');
        document.title = `click ${count} times`
    }, [name])

  return (
    <div>
        <h1>counting</h1>
        <h2>{count}</h2>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={()=>setCount(count + 1)}>Click</button>
    </div>
  )
}

export default HookCounterOne
