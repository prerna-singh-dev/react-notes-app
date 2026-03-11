import { useState } from "react";
import Header from "./components/Header";
import NotesBlock from "./components/NotesBlock";
import { ThemeContextProvider } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContextProvider value={{ theme, handleThemeChange }}>
      <main
        className={`${
          theme === "dark" ? "bg-gray-800  text-white" : "bg-white"
        }  w-1/2 my-15 mx-auto p-6 flex flex-col justify-center rounded-md border-2 border-gray-800 shadow-md shadow-gray-600`}
      >
        <Header />
        <NotesBlock />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
