import {memo} from 'react'
function ChildMemo({counter}) {
    console.log("ChildMemo - re-rendered")
    return ( 
        <div><h2> `Hi ${counter} friends`</h2></div>
     );
}

export default memo(ChildMemo);