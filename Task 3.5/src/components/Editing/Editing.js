import "./style.css";

import edit from "../../assets/img/edit.png";
import basket from "../../assets/img/basket.png";

const Editing = () => {
  function edits(event) {
    const listItem = event.target.closest(".list-item");
    const problem = listItem.querySelector(".list-item__problem");
    problem.textContent = prompt('введіть нову задачу');
    if (problem.textContent === "") {
      problem.textContent = "введіть задачу";
    }
  }

  function baskets(event) {
    event.currentTarget.parentNode.parentNode.remove();
  }

  return (
    <div className="list-btn__wrapper">
      <img className="list-item__edit" onClick={edits} src={edit} alt="" />
      <img
        className="list-item__basket"
        onClick={baskets}
        src={basket}
        alt=""
      />
    </div>
  );
};

export default Editing;
