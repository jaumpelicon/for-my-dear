import usPicture from "./assets/us.jpg";
import hePicture from "./assets/he.jpg";
import shePicture from "./assets/she.jpg";

import { Plus } from "@phosphor-icons/react";

import styles from "./App.module.css";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <header className={styles.declarationLove}>
        <h1>For my dear</h1>
        <strong>You are my forever love</strong>
      </header>
      <div className={styles.lovePhotos}>
        <img className={styles.squarePhoto} src={hePicture} />
        <Plus size={32} className={styles.plus} />
        <img className={styles.heartPhoto} src={usPicture} />
        <Plus size={32} className={styles.plus} />
        <img className={styles.squarePhoto} src={shePicture} />
      </div>
      <footer>
        <Timer />
      </footer>
    </>
  );
}

export default App;
