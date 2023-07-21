import styles from "./reviews.module.scss";
import reviews from "../../components/Review/reviews";
import Review from "../../components/Review/Review";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Reviews() {
  return (
    <>
      <div className={`${styles.container}`}>
        <header>
          <h3>Отзывы</h3>
          <div className={`${styles.header_buttons}`} >
            <a href="http://profi.ru/profile/PershinKO/?mobileApp=1">
              Отзывы на Профи.ру
              <img
                src="images/biege_arrow_right.svg"
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
            <a href="http://profi.ru/profile/PershinKO/?mobileApp=1">
              Отзывы на Яндекс.Карты
              <img
                src="images/biege_arrow_right.svg"
                alt="Нажмите, чтобы перейти и узать подробнее"
              />
            </a>
          </div>
        </header>
        <Splide
          options={{
            perPage: 4,
            perMove: 1,
            breakpoints: {
              376: {
                perPage: 1,
                height: 475,
              }
            },
            rewind: false,
            autoWidth: true,
            height: 445,
            pagination: false,
            arrows: true,
            type: "loop",
            gap: 24,
          }}
          className={styles.custom_splide}
          // className={style.splide}
          aria-label="Rates"
          onMoved={(splide, newIndex) => {
            // // eslint-disable-next-line
            // console.log("moved", newIndex);
            // // eslint-disable-next-line
            // console.log("length", splide.length);
          }}
        >
          {/* <div className={style.slider_container}> */}
          {/* <SplideTrack> */}
          {reviews.map((review) => (
            <SplideSlide
              key={review.id}
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: 20,
                alignItems: "center",
              }}
            >
              <Review
                review={review.review}
                name={review.name}
                stars={review.stars}
                date={review.date}
                text={review.text}
              ></Review>
            </SplideSlide>
          ))}
          {/* </div> */}
          {/* </SplideTrack> */}
        </Splide>
      </div>
    </>
  )
}
