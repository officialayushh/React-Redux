// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "./app/createSlice";

export default function App() {
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(increment());
    };

    const handleDec = () => {
        dispatch(decrement());
    };

    return (
        <div className="App">
            <h1>Redux Toolkit</h1>
            <div>
                <h1>{count}</h1>
                <button onClick={handleInc}>Inc</button>
                <button onClick={handleDec}>Dec</button>
            </div>
        </div>
    );
}
