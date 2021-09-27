import React, { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

export default function Form() {
  const [itemArr, setItemArr] = useState<ITodo[]>([
    { id: uuidv4(), value: "Allumer le pc" },
    { id: uuidv4(), value: "Ouvrir le terminal" },
    { id: uuidv4(), value: "Executer un yarn start" },
  ]);
  const [stateInput, setStateInput] = useState<ITodo | string>();
  const deleteTask = (idTask: string): void => {
    const dataState = itemArr.filter((item) => {
      return item.id !== idTask;
    });
    setItemArr(dataState);
  };
  const addTodo = (): void => {
    const newitemArr = [...itemArr];
    const newTodo: any = {};
    newTodo.value = stateInput;
    newTodo.id = uuidv4();
    newitemArr.push(newTodo);
    setItemArr(newitemArr);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStateInput(e.target.value);
  };
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <div className="mb-3">
        <label className="form-label mt-3" htmlFor="todo">
          Chose à faire
        </label>
        <input
          className="form-control mb-2"
          id="#todo"
          type="text"
          onChange={handleChange}
        />
        <button className=" btn btn-primary d-block" onClick={addTodo}>
          Envoyer
        </button>
      </div>

      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {itemArr?.map((item) => {
          return (
            <Item
              value={item.value}
              key={item.id}
              id={item.id}
              delFunc={deleteTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
