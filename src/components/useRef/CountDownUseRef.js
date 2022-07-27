import {useEffect, useLayoutEffect, useRef, useState} from 'react'

// NOTE
// useRef is used to save a value throught a reference outside of the component 

function CountDownUseRef() {
    const [counter, setCounter] = useState(60)
 
    const timeIdRef = useRef()
    const prevCounterRef = useRef();
    const h1Ref = useRef();

    // memorize previsous value of counter 
    useEffect(() => {
        prevCounterRef.current = counter
        console.log(h1Ref.current)
    }, [counter])

    const handleStart = () => {
        timeIdRef.current = setInterval(() => {
            setCounter(prev => prev - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeIdRef.current)
    }

    return ( 
        <div>
            <h1> Use Ref - Counter Down Start and Stop </h1>
            <div><h1 ref={h1Ref}>{`Current value : ${counter} - Previous value : ${prevCounterRef.current}`}</h1></div>
            <button
                onClick={handleStart}
            >Start</button>
            <button
                onClick={handleStop}
            >Stop</button>
        </div>
     );
}

export default CountDownUseRef;