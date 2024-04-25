import { useSelector } from "react-redux";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import DecrementBy5 from "./DecrementBy5";
import IncrementForm from "./IncrementForm";

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <>
      <h2>Count: {count}</h2>
      <IncrementButton /> <DecrementButton /> <DecrementBy5 />

      <IncrementForm />
    </>
  );
};

export default Counter;
