import "./App.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import Carousel from "./Carousel";

function App() {
  const images = [img1, img2, img3];
  return (
    <div className="flex items-center justify-center">
      <div className= "p-4 rounded-lg">
        <Carousel images={images} />
      </div>
    </div>
  );
}
export default App;
