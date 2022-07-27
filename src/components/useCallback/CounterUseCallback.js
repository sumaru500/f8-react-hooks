import {useEffect, memo, useRef, useState, useCallback} from 'react'
import ChildMemo from './ChildMemo'
// React concepts used to group common logic 
// Hooks => to anchor into a component
// HOC => to wrap on a component, eg. memo
// Render props => late render configure

// NOTES
// memo used to avoid re-render a child component when the parent component is re-rendered
// child component is re-rendered only if having a change at least one value in props

// useCallback store the function outside of component then return its reference 
// useCallback must be used with child component wrapped by memo

function CounterUseCallback() {
    const [counter, setCounter] = useState(60)
    const [counter2, setCounter2] = useState(60)

    const handleIncrease1 = () => {
        setCounter(prev => prev + 1)
    }
    
    const handleIncrease2 = useCallback(() => {
        setCounter2(prev => prev + 1)
    }, [])

    return ( 
        <div>
            <h1> Use Callback - Counter Increase </h1>
            <div><h1 >{`Counter 1 : ${counter} - Counter 2 : ${counter2}`}</h1></div>
            <ChildMemo counter={counter} onIncrease2={handleIncrease2}></ChildMemo>
            <button
                onClick={handleIncrease1}
            >Increase 1</button>
        </div>
     );
}

export default CounterUseCallback;