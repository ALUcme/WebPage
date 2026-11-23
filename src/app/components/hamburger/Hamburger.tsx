'use client'
import { SVGHambuerger } from "@/app/assets/svg/SVGHamburger";
import { useState } from "react";
import { HamburgerList } from "@/app/constants/lists";
import styles from "./hamburger.module.css"
import { SVGArrow } from "@/app/assets/svg/SVGArrow";
import { useRouter } from "next/navigation";
export default function Hamburger(){
    const router = useRouter();
    const [drop, setDrop] = useState(false)

    const manageDrop = () => {
        setDrop(!drop)
    }

    const manageOpc = (index:number) => {
        switch(index) {
            case 0:
                router.replace("./")
                break
            default:
                alert(index)
        }
    }

    return(
        <nav onClick={manageDrop} id={styles.wrapper} className={drop? '' : `pointer`}>
            {drop?
                <ul id={styles.list} className={styles.inline}>
                    <li onClick={manageDrop} className={`${styles.list_item} pointer_conteiner`}><SVGArrow/> Cerrar</li>
                    {HamburgerList.map((item, index) => (
                        <li onClick={() => manageOpc(index)} className={`${styles.list_item} pointer_conteiner`} key={index}>{item}</li>
                    ))}
                </ul>
            : 
                <div className={styles.inline} id={styles.hamburger}>
                    <SVGHambuerger/>
                </div>
            }
        </nav>
    )
}