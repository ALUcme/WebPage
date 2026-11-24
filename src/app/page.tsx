import PeelOff from "./components/peelof/PeelOff";
import TextBox from "./components/textbox/TextBox";
import { integrants } from "./constants/lists";
import { GObjetive, Objetive1, Objetive2, Objetive3, Objetive4 } from "./constants/texts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <div id="Miembros"/>
        <div id={styles.integrants}>
          <h1>Desarrolladores:</h1>
          {Object.entries(integrants).map(([nombre, github]) => (
            <PeelOff key={github} content={nombre} alt={github} /> 
          ))} 
        </div>
      </div> 
      <div id="Objetivos"/>
      <TextBox Title="Objetivo general" Content={GObjetive}/>
      <TextBox Title="Objetivo" Content={Objetive1} list={true}/>
      <TextBox Content={Objetive2} list={true}/>
      <TextBox Content={Objetive3} list={true}/>
      <TextBox Content={Objetive4} list={true}/>
    </main>
  );
}
