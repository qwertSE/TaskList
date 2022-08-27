import { ITask } from "../../../types/Itask";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

const Item = ({ task, time, selected, done, id, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} ${
        done ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !done &&
        selectTask({
          task,
          time,
          selected,
          done,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {done && <span className={style.concluido} aria-label="task done"></span>}
    </li>
  );
};

export default Item;
