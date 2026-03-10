import { useState, useRef, useEffect } from "react";
import AddNewNoteBtn from "./AddNewNoteBtn";
import NewNote from "./NewNote";
import NoteCard from "./NoteCard";

function NotesBlock() {
  const [createNewNote, setCreateNewNote] = useState(false);
  const [searchText, setSearchText] = useState("");

  const notesFromStorage = JSON.parse(localStorage.getItem("noteList"));
  const [notesList, setNotesList] = useState(notesFromStorage || []);
  const [noteToUpdate, setNoteToUpdate] = useState(null);

  useEffect(() => {
    if (
      searchText.trim() === "" &&
      (notesFromStorage !== undefined || notesFromStorage !== null)
    ) {
      setNotesList(JSON.parse(localStorage.getItem("noteList")));
    }
  }, [searchText]);

  function fetchSearchData(searchInput) {
    console.log(searchInput);
    const searchTerm = new RegExp(searchInput, "i");
    setSearchText(searchInput);
    const noteList = notesList.filter(
      (note) => searchTerm.test(note.title) || searchTerm.test(note.body)
    );

    console.log("searched", noteList);
    setNotesList(noteList);
  }

  const addNewNote = (newNote) => {
    console.log(newNote);
    if (noteToUpdate) {
      setNotesList((prev) =>
        prev.map((note) => (note.id === newNote.id ? newNote : note))
      );
      setNoteToUpdate(null);
    } else {
      const updatedNotes = [...notesList, newNote];
      setNotesList(updatedNotes);
      localStorage.setItem("noteList", JSON.stringify(updatedNotes));
    }

    setCreateNewNote(false);
  };

  const deleteNote = (id) => {
    console.log("deleteid:", id);
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotesList(updatedNotes);
    localStorage.setItem("noteList", JSON.stringify(updatedNotes));
  };

  const editNote = (id) => {
    setCreateNewNote(true);
    const noteToUpdate = notesList.filter((note) => note.id === id);
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
                value={searchText}
                onChange={(e) => fetchSearchData(e.target.value)}
                className="border-gray-400 w-full text-gray-400 border-2 py-2 px-2 rounded-md text-sm"
                placeholder="Search Notes..."
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
                    />
                  );
                })}
              </ul>
            ) : (
              <div className="w-full h-80 flex items-center justify-center">
                <p className="text-gray-400 font-medium text-sm">
                  <span></span>
                  <span>Notes you add appear here</span>
                </p>
              </div>
            )}

            <AddNewNoteBtn addNote={() => setCreateNewNote(true)} />
          </section>
        </>
      ) : (
        <NewNote addNewNote={addNewNote} noteToUpdate={noteToUpdate} />
      )}
    </>
  );
}

export default NotesBlock;
