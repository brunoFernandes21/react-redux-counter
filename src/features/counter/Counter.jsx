import { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
  selectCount,
} from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("");

  return (
    <div className="flex items-center justify-center flex-col gap-4 bg-white text-white w-[550px] h-[450px] rounded">
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => dispatch(increment())}>+</button>
        <p className="font-bold text-4xl text-blue-700">{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className="flex gap-4">
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
        <button onClick={() => dispatch(resetCount())}>Reset Count</button>
      </div>
      <input type="text" className="w-20" value={incrementAmount} onChange={(event) => setIncrementAmount(event.target.value)}/>
    </div>
  );
};
