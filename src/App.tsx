import "./app.css";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default App;
