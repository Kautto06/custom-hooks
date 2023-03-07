import { useState } from "react"


const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState(initialValue)

    const increse = (value = 1) => {
        setCounter((current) => current+value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const decrese = (value = 1) => {
        if(counter === 0 ) return
        setCounter( current =>current-value)
    }

    

    return {
        counter,
        increse,
        reset,
        decrese
    }
}

export default useCounter