import { useState } from "react";

const gifts = [
    'CPU i9',
    'RAM 32G',
    'RGB Keyboard'
]

function GiftUseState() {

    const [gift, setGift] = useState()

    const randomGift = () => {
        const index = Math.floor(Math.random() * 3);
        setGift(gifts[index]);
    }
    return ( 
        <div>
            <h1> {gift || 'Chua co phan thuong'}</h1>
            <button onClick={randomGift}>Lay thuong</button>

        </div>
     );
}

export default GiftUseState;