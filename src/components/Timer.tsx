import { useState, useEffect } from "react";
import styles from "./Timer.module.css";
const Timer = () => {
  const startDate = new Date("2024-04-27T00:00:00Z");

  const calculateTime = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);

    const years = Math.floor(diff / (60 * 60 * 24 * 365));
    const months = Math.floor(
      (diff % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)
    );
    const weeks = Math.floor((diff % (60 * 60 * 24 * 30)) / (60 * 60 * 24 * 7));
    const days = Math.floor((diff % (60 * 60 * 24 * 7)) / (60 * 60 * 24));
    const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diff % (60 * 60)) / 60);
    const seconds = diff % 60;

    return { years, months, weeks, days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timer}>
      <h2>Juntos desde 27 de abril de 2024</h2>
      <p>
        <strong>{time.years}</strong> anos, <strong>{time.months}</strong>{" "}
        meses, <strong>{time.weeks}</strong> semanas,{" "}
        <strong>{time.days}</strong> dias,
        <br />
        <strong>{time.hours}</strong> horas, <strong>{time.minutes}</strong>{" "}
        minutos, <strong>{time.seconds}</strong> segundos
      </p>
      <h3>Todo esse tempo vivido com muitooooo amor 💕❤️😍</h3>

      {/* <p>
        <strong>{time.years}</strong> anos
        <br />
        <strong>{time.months}</strong> meses
        <br />
        <strong>{time.weeks}</strong> semanas
        <br />
        <strong>{time.days}</strong> dias
        <br />
        <strong>{time.hours}</strong> horas
        <br />
        <strong>{time.minutes}</strong> minutos
        <br />
        <strong>{time.seconds}</strong>segundos
      </p> */}
    </div>
  );
};

export default Timer;
