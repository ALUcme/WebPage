import ImageBox from "./components/imagebox/ImageBox";
import PeelOff from "./components/peelof/PeelOff";
import TextBox from "./components/textbox/TextBox";
import { conclucions, integrants } from "./constants/lists";
import { GObjetive, Objetive1, Objetive2, Objetive3, Objetive4 } from "./constants/texts";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section id="Miembros" className={styles.integrants}>
        <h1 className="title">Desarrolladores:</h1>
          {Object.entries(integrants).map(([nombre, github]) => (
            <PeelOff key={github} content={nombre} alt={github} /> 
          ))} 
      </section>
      <section id="Objetivos">
        <TextBox Title="Objetivo general" Content={GObjetive}/>
        <TextBox Title="Objetivo" Content={Objetive1} list={true}/>
        <TextBox Content={Objetive2} list={true}/>
        <TextBox Content={Objetive3} list={true}/>
        <TextBox Content={Objetive4} list={true}/>
      </section>
      <section id="Diagrama">
          <ImageBox  title="Diagrama de bloques" src=""/>
      </section>
      <section id="Concluciones">
        <h1 className="title">Concluciones:</h1>
        {Object.entries(conclucions).map(([nombre, conc]) => (
          <TextBox key={nombre} Title={nombre} Content={conc}/>
        ))}
      </section>
    </main>
  );
}
