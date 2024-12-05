import useCounter from "./useCounter";

const Counter2 = () => {
  const [count, Increment, Decrement] = useCounter(15);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter2;