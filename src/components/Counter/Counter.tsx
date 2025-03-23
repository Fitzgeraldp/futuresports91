import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
                aria-label="Increment"
            >
                +
            </button>
            <button
                onClick={() => setCount(count - 1)}
                aria-label="Decrement"
            >
                -
            </button>
        </div>
    );
}; 