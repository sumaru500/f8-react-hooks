import {useEffect, memo, useRef, useState} from 'react'
import ChildMemo from './ChildMemo'
// React concepts used to group common logic 
// Hooks => to anchor into a component
// HOC => to wrap on a component, eg. memo
// Render props => late render configure

// NOTE
// memo used to avoid re-render a child component when the parent component is re-rendered
// child component is re-rendered only if having a change at least one value in props
function CounterMemo() {
    const [counter, setCounter] = useState(60)
    const [counter2, setCounter2] = useState(60)

    const handleIncrease1 = () => {
        setCounter(prev => prev + 1)
    }
    
    const handleIncrease2 = () => {
        setCounter2(prev => prev + 1)
    }

    return ( 
        <div>
            <h1> Memo - Counter Increase </h1>
            <div><h1 >{`Counter 1 : ${counter} - Counter 2 : ${counter2}`}</h1></div>
            <ChildMemo counter={counter}></ChildMemo>
            <button
                onClick={handleIncrease1}
            >Increase 1</button>
            <button
                onClick={handleIncrease2}
            >Increase 2</button>
        </div>
     );
}

export default CounterMemo;