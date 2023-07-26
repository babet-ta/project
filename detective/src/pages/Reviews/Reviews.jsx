import style from "./reviews.module.scss";
// import "@splidejs/react-splide/css";
import reviews from "../../components/Reviews/reviews-array";
import Review from "../../components/Review-card/Review-card";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export default function Reviews(props) {
  return (
    <>
      <div className={style.page_container}>
        <div className={style.page_header}>
          <Breadcrumbs />
          <h3 className={style.page_title}>отзывы о компании pershin & partners</h3>
          <a href="https://yandex.ru/maps/org/pershin_partners/77630423623/reviews/?add-review=true" rel="noreferrer" className={style.page_link}>
            Оставить отзыв
            <img src="./images/biege_arrow_right.svg"></img>
          </a>
        </div>

        <Pagination
          array={reviews}
          wrapper={style.page_block}
        />

      </div>
    </>
  );
}
