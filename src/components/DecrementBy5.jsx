import { useDispatch } from "react-redux";
import { decrementBy5 } from "../features/counter/counterSlice";

const DecrementBy5 = () => {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(decrementBy5());
  }

  return (
    <>
      <button onClick={clickHandler}>DecrementBy5</button>
    </>
  );
};

export default DecrementBy5;
