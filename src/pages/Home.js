import "../css/Home.css";
import Splash from "../components/Splash";
import TopCreators from "../components/TopCreators";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      <Splash />
      <TopCreators />
      <Newsletter />
    </div>
  );
}
