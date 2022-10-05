import { Header } from "./components";
import "./App.css";
import { AppInner } from "./AppInner";
import { BackgroundProvider } from "./components/BackgroundProvider";
import { ContentMain, Content02, Content03, Content04 } from "./contents";
import section1_bg from "./asset/images/section1.jpeg";
import { ParallaxProvider } from "react-scroll-parallax";
function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header />
        <BackgroundProvider imgSrc={section1_bg}>
          <AppInner renderComponent={ContentMain} />
        </BackgroundProvider>
        <BackgroundProvider imgSrc="#000000">
          <AppInner renderComponent={Content02} />
        </BackgroundProvider>
        <BackgroundProvider imgSrc="#000000">
          <AppInner renderComponent={Content03} />
        </BackgroundProvider>
        <BackgroundProvider>
          <AppInner renderComponent={Content04} />
        </BackgroundProvider>
        <BackgroundProvider>
          <AppInner renderComponent={ContentMain} />
        </BackgroundProvider>
        <BackgroundProvider>
          <AppInner renderComponent={ContentMain} />
        </BackgroundProvider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
