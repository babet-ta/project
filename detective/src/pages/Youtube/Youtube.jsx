import styles from "./youtube.module.scss";
import icon from "../../assets/images/icon_youtube.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import preview1 from "../../assets/images/video_preview_1.png";
import preview2 from "../../assets/images/video_preview_2.png";
import preview3 from "../../assets/images/video_preview_3.png";
import play from "../../assets/images/play_button.svg"

export default function Youtube() {
  return (
    <div className={`${styles.container}`}>
      <header className={`${styles.youtube_header}`}>
        <h3>ПОЗНАКОМЬТЕСЬ С P&P НА YOUTUBE</h3>
        <a
          href="https://www.youtube.com/@pershin_detective"
          target="_blank"
          rel="noreferrer"
        >
          <span>
            Наш блог на YouTube
            <img src={`${icon}`} alt="YouTube"></img>
          </span>
        </a>
      </header>
      <Splide
        options={{
          perPage: 2,
          breakpoints: {
            1280: {
              perPage: 3,
            },
            968: {
              perPage: 2,
              arrows: false,
              gap: 0,
            },
            500: {
              perPage: 2,
              height: 200,
              gap: 0,
              arrows: false,
            }
          },
          perMove: 1,
          autoWidth: true,
          height: 487,
          pagination: false,
          arrows: true,
          type: "loop",
          gap: 10,
        }}
        className={`${styles.custom_splide}`}
      >
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ipz85rqjzJU&amp;t=28s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.video}`}
              src={`${preview1}`}
              alt="video"
            >
            </img>
            <img className={`${styles.play}`} src={`${play}`} alt="play video"></img>
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=yAYJnED2nRc&amp;t=58s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.video}`}
              src={`${preview2}`}
              alt="video"
            ></img>
            <img className={`${styles.play}`} src={`${play}`} alt="play video"></img>
          </a>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://www.youtube.com/watch?v=Ltecs0t_dJo&amp;t=6s"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={`${styles.video}`}
              src={`${preview3}`}
              alt="video"
            ></img>
            <img className={`${styles.play}`} src={`${play}`} alt="play video"></img>
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
}
