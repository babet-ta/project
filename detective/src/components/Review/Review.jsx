import styles from "./review.module.scss";
import star from "../../assets/images/icon_star.svg"
import emptyStar from "../../assets/images/icon_empty_star.svg"

export default function Review(props) {
  const stars = [];

  const rand = function () {
    return Math.random();
  }

  for (let i = 0; i < props.stars; i++) {
    stars.push(<img src={star} alt="" key={rand()}></img>);
  }

  if (stars.length < 5) {
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img src={emptyStar} alt="" key={rand()}></img>);
    }
  }

  return (
    <div className={`${styles.review}`}>
      <div className={`${styles.review_stars}`}>
        <span>{props.review}</span>
        {stars}
      </div>
      <p className={`${styles.review_name}`}>{props.name}</p>
      <p className={`${styles.review_date}`}>{props.date}</p>
      <p className={`${styles.review_text}`}>{props.text}</p>
    </div>
  );
}