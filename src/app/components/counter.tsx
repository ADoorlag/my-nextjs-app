"use client"
import { useState } from "react";

export const Counter = () => {
    console.log('Counter Component')
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incremented {count} times</button>
        </div>
    );
}