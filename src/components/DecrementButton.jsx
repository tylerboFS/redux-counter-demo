import { useDispatch } from "react-redux";
import { decrement } from "../features/counter/counterSlice";

const DecrementButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={clickHandler}>Decrement</button>
    </>
  );
};

export default DecrementButton;