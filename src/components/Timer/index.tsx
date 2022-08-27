import Clock from "./Clock";
import style from "./Timer.module.scss";
import Button from "../Button";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Itask";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  taskDone: () => void;
}

const Timer = ({ selected, taskDone }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return regressive(count - 1);
      }
      taskDone();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button
        type="button"
        name="Começar!"
        onClick={() => regressive(time)}
      ></Button>
    </div>
  );
};

export default Timer;
