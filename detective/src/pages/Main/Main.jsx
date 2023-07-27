import MainBG from "../../components/MainBG/MainBG.jsx";
import About from "../../pages/About/About.jsx";
import Blog from "../Blog/Blog.jsx";
import Director from "../Director/Director.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import FirstVisit from "../FirstVisit/FirstVisit.jsx";
import License from "../License/License.jsx";
import Map from "../Map/Map.jsx";
import Safety from "../Safety/Safety.jsx";
import Services from "../Services/Services.jsx";
import Youtube from "../Youtube/Youtube.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";

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
        <FAQ />
        <Blog />
        <Map />
      </main>
    </>
  );
}

export default Main;
