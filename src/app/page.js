import Header from "./components/Header";
import Categories from "./components/Category/CategorySlider";
import ToggleBar from "./components/ToggleBar";
import Footer from "./components/Footer";
import Hotels from "./components/Hotel/Hotels";
import MapButton from "./components/MapButton";


export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <ToggleBar />
      <Hotels />
      <MapButton />
      <Footer />
    </div>
  )
}
