import styles from './textbox.module.css'
interface TextBox {
    Title?: string,
    Content: string
    list?: boolean
}
export default function TextBox({Title, Content, list = false}:TextBox){
    return(
        <>
            {Title? <h2 className={styles.title}>{Title}</h2> : null}
            {list?
                <li className={styles.content}>{Content}</li>
            :
                <p className={styles.content}>{Content}</p>
            }
        </>
    )
}