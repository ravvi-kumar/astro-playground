import { useStore } from "zustand";
import counterStore from "../store/counter.store";

const ReactCounter = () => {
  const { count, inc } = useStore(counterStore);
  return (
    <>
      <button
        onClick={() => {
          inc(1);
        }}
      >
        React :{count}
      </button>
    </>
  );
};
export default ReactCounter;
