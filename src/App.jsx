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
        className={`relative ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-700 shadow-xl shadow-gray-900/30"
            : "bg-white border-gray-200 shadow-lg shadow-gray-200"
        } w-1/2 my-16 mx-auto p-8 flex flex-col justify-center rounded-xl border min-h-[32rem]`}
      >
        <Header />
        <NotesBlock />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
