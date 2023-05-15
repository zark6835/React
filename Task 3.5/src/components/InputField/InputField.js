import { useRef } from "react";
import "./style.css";

const InputField = ({ setList, list }) => {
  const inputRef = useRef(null);

  function pushValue() {
    const inputValue = inputRef.current.value;
    if (inputValue === "") {
      alert("введіть нову справу");
    } else {
      setList([
        ...list,
        {
          id: Date.now(),
          title: inputValue,
          check: false,
        },
      ]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="list-input__wrapper">
      <input
        className="list-input"
        type="text"
        placeholder="ведіть задачу"
        ref={inputRef}
      />
      <button className="list-input__btn" onClick={pushValue}>
        Edit
      </button>
    </div>
  );
};

export default InputField;
