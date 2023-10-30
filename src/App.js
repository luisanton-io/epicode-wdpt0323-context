import { useState } from "react";
import Counter from "./components/Counter";
import CounterToText from "./components/CounterToText";
import "./styles.css";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ThemeContext from "./contexts/Theme";
import CounterContext from "./contexts/Counter";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState("light");

  return (
    <>
      <CounterContext.Provider
        value={{
          counter,
          setCounter,
          macarena: "macarena",
          numeroACaso: Math.random() * 10,
        }}
      >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`${theme} App`}>
            <NavBar />
            <Counter counter={counter} setCounter={setCounter} />
            {/* 
        ...immaginate una lunga lista di componenti... 
      */}
            <CounterToText counter={counter} />
            <Footer setCounter={setCounter} />
          </div>
        </ThemeContext.Provider>
      </CounterContext.Provider>
    </>
  );
}
