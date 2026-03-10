import Header from "./components/Header";
import NotesBlock from "./components/NotesBlock";

function App() {
  return (
    <main className="bg-gray-800 w-1/2 my-15 mx-auto p-6 flex flex-col justify-center text-white rounded-md">
      <Header />
      <NotesBlock />
    </main>
  );
}

export default App;
