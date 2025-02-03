import usPicture from "./assets/us.jpg";
import hePicture from "./assets/he.jpg";
import shePicture from "./assets/she.jpg";

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
        <div className={styles.personSection}>
          <img className={styles.squarePhoto} src={hePicture} />
          <p>
            João Carlos Peliçon um menino sonhador e completamente apaixonado em
            sua companheira que acredita que irá conquistar o mundo ao lado de
            sua dama
          </p>
        </div>
        <div className={styles.personSection}>
          <img className={styles.heartPhoto} src={usPicture} />
          <p>Juntos são o maior casal que já existiu 😍💕</p>
        </div>
        <div className={styles.personSection}>
          <img className={styles.squarePhoto} src={shePicture} />
          <p>
            Maria Eduarda Colman uma garota incrível e completamente apaixonada
            em seu companheiro que o auxilia a crescer e conquistar o mundo
          </p>
        </div>
      </div>
      <footer>
        <Timer />
      </footer>
    </>
  );
}

export default App;
