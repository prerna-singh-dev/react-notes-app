import { useState, useEffect, useContext } from "react";
import AddNewNoteBtn from "./AddNewNoteBtn";
import NewNote from "./NewNote";
import NoteCard from "./NoteCard";
import NoteViewModal from "./NoteViewModal";
import { ThemeContext } from "../context/ThemeContext";

function NotesBlock() {
  const [createNewNote, setCreateNewNote] = useState(false);
  const [searchText, setSearchText] = useState("");

  const notesFromStorage = JSON.parse(localStorage.getItem("noteList"));
  const [notesList, setNotesList] = useState(notesFromStorage || []);
  const [noteToUpdate, setNoteToUpdate] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const { theme } = useContext(ThemeContext);

  const closeModal = () => setSelectedNote(null);

  useEffect(() => {
    if (searchText.trim() === "") {
      setNotesList(JSON.parse(localStorage.getItem("noteList")) || []);
    }
  }, [searchText]);

  function fetchSearchData(searchInput) {
    console.log("inside fetch:", searchInput);
    const searchTerm = new RegExp(searchInput, "i");
    const dataFromStorage = JSON.parse(
      localStorage.getItem("noteList") || noteList
    );
    setSearchText(searchInput);
    const noteList = dataFromStorage.filter(
      (note) => searchTerm.test(note.title) || searchTerm.test(note.body)
    );

    setNotesList(noteList);
  }

  const addNewNote = (newNote) => {
    let updatedNotes = notesList;
    if (noteToUpdate) {
      updatedNotes = notesList.map((note) =>
        note.id === newNote.id ? newNote : note
      );
      setNoteToUpdate(null);
    } else {
      updatedNotes = [...notesList, newNote];
    }
    setNotesList(updatedNotes);
    localStorage.setItem("noteList", JSON.stringify(updatedNotes));
    setCreateNewNote(false);
  };

  const deleteNote = (id) => {
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotesList(updatedNotes);
    localStorage.setItem("noteList", JSON.stringify(updatedNotes));
  };

  const editNote = (id) => {
    setCreateNewNote(true);
    const noteToUpdate = notesList.find((note) => note.id === id);
    setNoteToUpdate(noteToUpdate);
  };

  return (
    <>
      {!createNewNote ? (
        <>
          <section>
            <div className="my-8">
              <input
                type="search"
                name="searchNote"
                id="searchNote"
                aria-label="Search Notes"
                value={searchText}
                onChange={(e) => fetchSearchData(e.target.value)}
                className={`${
                  theme === "light"
                    ? "text-gray-800 border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    : "text-gray-200 border-gray-600 bg-gray-700/50 focus:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                } w-full border py-2.5 px-3 rounded-lg text-sm placeholder-gray-500 dark:placeholder-gray-400 transition-colors outline-none`}
                placeholder="Search notes..."
              />
            </div>
          </section>
          <section>
            {notesList && notesList.length > 0 ? (
              <ul className="w-full h-80 overflow-y-scroll">
                {notesList.map((note) => {
                  return (
                    <NoteCard
                      key={note.id}
                      note={note}
                      deleteNote={deleteNote}
                      editNote={editNote}
                      onTitleClick={setSelectedNote}
                    />
                  );
                })}
              </ul>
            ) : (
              <div
                className={`w-full h-72 mb-4 flex items-center justify-center rounded-lg border border-dashed ${
                  theme === "light"
                    ? "border-gray-300 bg-gray-50/50"
                    : "border-gray-600 bg-gray-800/30"
                }`}
              >
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {searchText
                    ? "Not found !!"
                    : "Notes you add will appear here"}
                </p>
              </div>
            )}

            <AddNewNoteBtn addNote={() => setCreateNewNote(true)} />
          </section>
        </>
      ) : (
        <NewNote addNewNote={addNewNote} noteToUpdate={noteToUpdate} />
      )}

      <NoteViewModal
        isOpen={!!selectedNote}
        title={selectedNote?.title ?? ""}
        description={selectedNote?.body ?? ""}
        onClose={closeModal}
      />
    </>
  );
}

export default NotesBlock;
