import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteFn, minuteSn] = String(minutes).padStart(2, "0");
  const [secondsFn, secondsSn] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minuteFn}</span>
      <span className={style.relogioNumero}>{minuteSn}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsFn}</span>
      <span className={style.relogioNumero}>{secondsSn}</span>
    </>
  );
};

export default Clock;
