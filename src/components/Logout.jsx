import { useContext } from "react";
import ThemeContext from "../contexts/Theme";

export default function Logout({ setCounter }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Logout from {theme} theme and reset
      </button>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Switch
      </button>
    </>
  );
}
