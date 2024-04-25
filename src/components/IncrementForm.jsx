import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "../features/counter/counterSlice";

const IncrementForm = () => {
  const [incrementBy, setIncrementBy] = useState(0);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(incrementBy));
    setIncrementBy(0);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>
          Increment By:
          <input
            type="number"
            value={incrementBy}
            onChange={(e) => setIncrementBy(parseInt(e.target.value))}
          />
        </label>
        <input type="submit" value={`Increment by ${incrementBy}`} />
      </form>
    </>
  );
};

export default IncrementForm;
