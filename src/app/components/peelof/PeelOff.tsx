import styles from './peeloff.module.css';

interface PeelOffProps {
  content: string;
  alt: string;
}

export default function PeelOff({ content, alt }: PeelOffProps) {
  return (
    <a
      href={`https://github.com/${alt}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      <h3 className={`${styles.content} ${styles.main}`}>{content}</h3>
      <h3 className={`${styles.content} ${styles.back}`}>Github: {alt}</h3>
    </a>
  );
}