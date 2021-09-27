import { ITodo } from "../../interfaces/ITodo";

export default function Item(props: ITodo) {
  return (
    <div>
      <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.value}</div>
        <button className="btn btn-danger p-2 h-50" onClick={() => props.delFunc(props.id)}>Supprimer</button>
      </li>
    </div>
  );
}
