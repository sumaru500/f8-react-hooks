import {memo} from 'react'
function ChildMemo({counter, onIncrease2}) {
    console.log("ChildMemo - re-rendered")
    return ( 
        <div>
            <button
                onClick={onIncrease2}
            >Increase 2</button>
            <h2> `Hi ${counter} friends`</h2>
        </div>
     );
}

export default memo(ChildMemo);