import styles from "./post.module.scss";

export default function Post(props) {
  return (
    <a href={props.link} className={`${styles.post}`}>
      <img src={props.image}></img>
      <span>{props.tag}</span>
      <div className={`${styles.post_content}`}>
        <p className={`${styles.post_title}`}>{props.title}</p>
        <p className={`${styles.post_text}`}>{props.text}</p>
        <div className={`${styles.post_bottom}`}>
          <p className={`${styles.post_button}`}>Читать</p>
          <p className={`${styles.post_date}`}>{props.date}</p>
        </div>
      </div>
    </a>
  );
}