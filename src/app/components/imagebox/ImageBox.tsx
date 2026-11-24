import Image, { type StaticImageData } from "next/image";
import styles from "./imagebox.module.css";

interface ImageBoxProps {
  title?: string;
  src: string | StaticImageData;
  alt?: string;
}

export default function ImageBox({
  title,
  src,
  alt = "",
}: ImageBoxProps) {
  return (
    <figure className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Image
        src={src}
        alt={alt}
        className={styles.image}
      />
    </figure>
  );
}