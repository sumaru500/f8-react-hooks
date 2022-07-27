import {useEffect, useLayoutEffect, useState} from 'react'

// 1. useEffect(callback)
// - callback is also called each time component re-rendered 
// - callback is called only after component added into dom
// 1. useEffect(callback, [])
// - callback is called only once when component mounted
// 1. useEffect(callback, [deps])
// - callback is called only once when deps(a variable, eg. prop, state) has changed

// NOTES
// 1. useEffect: callback is always called after component mounted
// 2. useEffect: cleanup function is always called before component unmounted
// 3. useEffect: cleanup function is always called before callback called (except the first time)


//----------------------------------------------------------------//
// useEffect
// 1. When a state changed (setState) 
// 2. Mutate DOM
// 3. Re-Render UI
// 4. Inside useEffect => cleanup function called
// 5. Inside useEffect => callback function called

// useLayoutEffect
// 1. When a state changed (setState)
// 2. Mutate DOM
// 3. Inside useLayoutEffect => cleanup function called
// 4. Inside useLayoutEffect => callback function called
// 5. Re-Render UI

// NOTE
// useLayoutEffect is used to avoid flash when we call setState two times for changing on the same state

function CounterUseLayoutEffect() {
    const [counter, setCounter] = useState(0)
 
    // limit max counter value
    useLayoutEffect(() => {
        if (counter > 3) {
            setCounter(0);
        }
    }, [counter])

    const handleIncrease = () => {
        setCounter(prev => prev + 1);
    }

    return ( 
        <div>
            <h1> Use Layout Effect - Avoid counter flash </h1>
            <div><h1>{counter}</h1></div>
            <button
                onClick={handleIncrease}
            >Increase</button>
        </div>
     );
}

export default CounterUseLayoutEffect;