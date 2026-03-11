import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NewNote({ addNewNote, noteToUpdate }) {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!noteToUpdate) return;
    if (titleRef.current && bodyRef.current) {
      titleRef.current.value = noteToUpdate.title || "";
      bodyRef.current.value = noteToUpdate.body || "";
      setDisabled(!titleRef.current.value || !bodyRef.current.value);
    }
  }, [noteToUpdate]);

  const handleChange = () => {
    setDisabled(!titleRef.current.value || !bodyRef.current.value);
  };

  const createNewNote = () => {
    let newNote = null;
    if (!titleRef.current.value || !bodyRef.current.value) return;

    if (noteToUpdate != null) {
      newNote = {
        id: noteToUpdate.id,
        title: titleRef.current.value,
        body: bodyRef.current.value,
        createdOn: Date.now(),
        pinned: false,
      };
    } else {
      newNote = {
        id: crypto.randomUUID(),
        title: titleRef.current.value,
        body: bodyRef.current.value,
        createdOn: Date.now(),
        pinned: false,
      };
    }

    addNewNote(newNote);
  };
  return (
    <section className="my-5">
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="title"
          id="title"
          aria-label="Enter Note Title"
          ref={titleRef}
          onChange={handleChange}
          className={`${
            theme === "light"
              ? "bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gray-300 focus:border-gray-400"
              : "bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          } w-full py-2.5 px-3 rounded-lg text-sm mb-4 outline-none transition-colors`}
          placeholder="Title..."
          aria-required="true"
          required
        />
        <textarea
          name="noteBody"
          id="noteBody"
          aria-label="Enter Note Description"
          ref={bodyRef}
          onChange={handleChange}
          className={`${
            theme === "light"
              ? "bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-gray-300 focus:border-gray-400"
              : "bg-gray-800 border border-gray-600 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          } w-full py-2.5 px-3 rounded-lg text-sm min-h-28 resize-none outline-none transition-colors`}
          placeholder="Description..."
          aria-required="true"
          required
        ></textarea>

        <button
          type="button"
          onClick={createNewNote}
          aria-label={noteToUpdate !== null ? "Edit Note" : "Save Note"}
          className={`text-white px-5 py-2.5 text-sm font-medium rounded-lg mt-4 transition-colors  ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${
            theme === "light"
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-600 hover:bg-gray-500"
          }`}
        >
          Save
        </button>
      </div>
    </section>
  );
}

export default NewNote;
