import Hamburger from '@/app/components/hamburger/Hamburger'
import styles from './header.module.css'
export default function Header() {
    return(
        <header id={styles.header}>
          <div className={`${styles.leftcase} pointer`}><h3>ALUcme</h3></div>
          <div />
          <div>
            <Hamburger/>
          </div>
        </header>
    )
}