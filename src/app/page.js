import Header from "./components/Navbars/Header";
import MobileHeader from "./components/Navbars/MobileHeader";
import Categories from "./components/Category/CategorySlider";
import ToggleBar from "./components/ToggleBar";
import Footer from "./components/Footers/Footer";
import Hotels from "./components/Hotel/Hotels";
import MapButton from "./components/MapButton";
import MobileFooter from "./components/Footers/MobileFooter";


export default function Home() {
  return (
    <div>
      <Header />
      <MobileHeader />
      <Categories />
      <ToggleBar />
      <Hotels />
      <MapButton />
      <MobileFooter />
      <Footer />
    </div>
  )
}
