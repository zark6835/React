import { useState } from "react";

import InputField from "../InputField/InputField";
import Editing from "../Editing/Editing";
import { listOfTasks } from "../../helpers/TodoItems";

import "./style.css";

const TodoList = () => {
  const [list, setList] = useState(listOfTasks);

  return (
    <div className="container">
      <p className="title">Todo List</p>
      <div className="weapper">
        <InputField setList={setList} list={list} />
        <ul className="list-wrapper">
          {list.map((tasks) => {
            return (
              <li className="list-item" key={tasks.id}>
                <div className="gap-wrapper">
                  <input className="list-item__check" type="checkbox" />
                  <p className="list-item__problem">{tasks.title}</p>
                </div>
                <Editing />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
