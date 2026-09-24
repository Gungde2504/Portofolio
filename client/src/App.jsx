import Home from "./pages/Home";
import BackgroundOrbs from "./components/ui/BackgroundOrbs";

function App() {
  return (
    <>
      <BackgroundOrbs />
      <div className="relative z-10">
        <Home />
      </div>
    </>
  );
}

export default App;
