import React, {useState} from "react";

const orders = [100, 200, 300, 400];

function CounterUseState() {
    // const [counter, setCounter] = useState(1);
    // initial state with callback to avoid re-compute in complex calculations  
    const [counter, setCounter] = useState(() => {
        return orders.reduce((total, curr) => (total + curr), 0)
    });
    const [info, setInfo] = useState({
        name: 'Thang',
        age: 18
    });
    const increaseHandler = () => {
        setCounter(counter + 1);
        // increase three times => pass callback
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)

        // modify info state
        setInfo((prevState) => {
            // some logic here
            //
            //
            
            return {
                ...prevState,
                surname: 'PHAM'
            }
        })
    }

    console.log('re-render');

    return ( 
        <div style={{padding: 20}}>
            <h2>{JSON.stringify(info)}</h2>
            <h1>{counter}</h1>
            <button onClick={increaseHandler}>Increase</button>
        </div>
     );
}

export default CounterUseState;