
import React, {useState, useEffect} from "react";

function IntervalCounter () {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount( count + 1 )
    }

     useEffect( () => {
        const Interval = setInterval(tick, 1000)
        console.log('CompountDidMount');
        return ( () => {
            clearInterval(Interval)
            console.log('unmount');
        })
     },[count] )

    return(
        <div>{count}</div>
    )

}

export default IntervalCounter ;