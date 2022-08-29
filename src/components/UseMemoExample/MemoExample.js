import React, {useState, useMemo} from 'react';

const MemoExample = (props) => {
    const [countOne, setCountOne]  = useState(0)
    const [countTwo, setCountTwo]  = useState(0)

    const incrementOne = () =>{
        setCountOne(countOne + 1)
    }

    const incrementTwo = () =>{
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while(i<2000000000) i++
        return countOne % 2 === 0
    },[countOne])

    // Everytime a state updates, component rerenders. Here useMemo helps in not rerendering the isEven function when increment count two is clicked.

    
    return (
        <div>
            <p>
            Count One - {countOne}
            <button onClick={incrementOne}>Increment</button>
            <span>----{isEven ? 'Even' : 'Odd'}</span>
            </p>
            <p>
            Hook Two - {countTwo}
            <button onClick={incrementTwo}>Increment</button>
            </p>
        </div>
    );
};

export default MemoExample;

