import MainBG from "../../components/MainBG/MainBG.jsx";
import About from "../../pages/About/About.jsx";
import Blog from "../Blog/Blog.jsx";
import Director from "../Director/Director.jsx";
import FirstVisit from "../FirstVisit/FirstVisit.jsx";
import License from "../License/License.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Safety from "../Safety/Safety.jsx";
import Services from "../Services/Services.jsx";
import Youtube from "../Youtube/Youtube.jsx";

function Main() {
  return (
    <>
      <main>
        <MainBG />
        <About />
        <Services />
        <License />
        <Youtube />
        <FirstVisit />
        <Director />
        <Reviews />
        <Safety />
        <Blog />
    </>
  );
}

export default Main;
