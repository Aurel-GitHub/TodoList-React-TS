import { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

export default function Form(): JSX.Element {
  const [itemValue, setItemValue] = useState<ITodo[]>([
    { id: uuidv4(), value: "Allumer le pc" },
    { id: uuidv4(), value: "Ouvrir le terminal" },
    { id: uuidv4(), value: "Executer un yarn start" },
  ]);
  const deleteTask = (idTask: string): void => {
    const dataState = itemValue.filter((item) => {
      return item.id !== idTask;
    });
    setItemValue(dataState);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label className="form-label mt-3" htmlFor="todo">
          Chose à faire
        </label>
        <input className="form-control" id="#todo" type="text" />
        <button className="mt-2 btn btn-primary d-block">Envoyer</button>
      </form>
      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {itemValue?.map((item) => {
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
