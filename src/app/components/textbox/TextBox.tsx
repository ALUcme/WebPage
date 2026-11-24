import styles from './textbox.module.css'
interface TextBox {
    Title?: string,
    Content: string
    list?: boolean
}
export default function TextBox({Title, Content, list = false}:TextBox){
    return(
        <>
            {Title? <h2 className={`${styles.title} title`}>{Title}</h2> : null}
            {list?
                <p className={`${styles.content} vin`}>{Content}</p>
            :
                <p className={`${styles.content} ${styles.text}`}>{Content}</p>
            }
        </>
    )
}