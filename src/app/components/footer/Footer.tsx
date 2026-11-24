'use clientS'
import { Disclaimer } from '@/app/constants/texts'
import TextBox from '../textbox/TextBox'
import styles from './Footer.module.css'
export default function Footer() {
    return(
        <footer id={styles.footer}>
            <h1 className={styles.disclaimer}>Disclaimers</h1>
            <TextBox Content={Disclaimer}/>
        </footer>
    )
}