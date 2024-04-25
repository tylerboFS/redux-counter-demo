import { useDispatch } from "react-redux";
import { increment } from "../features/counter/counterSlice";

const IncrementButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(increment());
  };

  return (
    <>
      <button onClick={clickHandler}>Increment</button>
    </>
  );
};

export default IncrementButton;
