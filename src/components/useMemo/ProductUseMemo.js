import {useEffect, useMemo, useRef, useState, useCallback} from 'react'


// NOTES
// useMemo is used to avoid recompute when the component is re-rendered by another state change 

function ProductUseMemo() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const total = useMemo(() => {
        return products.reduce((result, curr) => result + curr.price, 0)
    }, [products])

    const handleAdd = () => {
        setProducts(prev => {
            return [
                ...prev,
                {
                    name,
                    price : +price
                }
            ]
        });

        setName('');
        setPrice('');
        nameRef.current.focus()
    }

    return ( 
        <div>
            <h1> Use Memo - Product list with Total price </h1>
            <div>
            <input ref={nameRef} placeholder='Enter a product'
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            </div>
            <div>
            <input placeholder='Enter price'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            </div>
            <button
                onClick={handleAdd}
            >
                Add
            </button>
            <h2>Total : {total}</h2>
            <ul>
                {products.map((product, index) => (
                  <li key={index}>{product.name} - {product.price}</li>  
                ))}
            </ul>
        </div>
     );
}

export default ProductUseMemo;