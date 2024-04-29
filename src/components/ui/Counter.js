import { useEffect, useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    const [anotherCount, setAnotherCount] = useState(10)
    const [timerCount, setTimerCount ] = useState(0)
    // useEffect(()=>{
    //     alert("side effect of state change")
    // },[anotherCount])

    useEffect(()=>{
        let timer = setInterval(()=>{
            setTimerCount(timerCount + 1)
        },1000)

        //clean up function
        return () => clearInterval(timer)
    },[timerCount])

    const increase = () => setCount(count+1)
    const decrease = () => setCount(count-1)
    return (
        <div>
            <button className="btn btn-primary" onClick={increase}>Increment (+)</button>
            <p>Count: {count}</p>
            {count>0 && <button className="btn btn-danger" onClick={decrease}>Decrement (-)</button>}
            <h1>{timerCount}</h1>
            <h1 className="text-sucess">{anotherCount}</h1>
            <button className="btn btn-info" onClick={()=>setAnotherCount(anotherCount+5)}>Click me to add 5</button>
        </div>
    )
}

export default Counter