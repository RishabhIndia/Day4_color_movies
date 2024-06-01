import Navbar from "./components/navbar";
import crayon from "./data/crayon";
import Display_color from "./components/Display_color";
import Navbar_Movie from "./components/Navbar_Movie";
import Movies from "./components/movie";
function App() {
  return (
    <>
      <Navbar />

      <div className="color-grid"> 
      {crayon.map((item, index) => {
        return (<Display_color key={index} hex={item.hex} name={item.name} rgb={item.rgb} />);
      })}
      </div>

      <Navbar_Movie />
      <Movies />
    </>
  );
}
export default App;
