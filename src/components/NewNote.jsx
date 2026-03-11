import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NewNote({ addNewNote, noteToUpdate }) {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!noteToUpdate) return;
    if (titleRef.current && bodyRef.current) {
      titleRef.current.value = noteToUpdate[0].title || "";
      bodyRef.current.value = noteToUpdate[0].body || "";
    }
  }, [noteToUpdate]);

  const createNewNote = () => {
    let newNote = null;
    if (noteToUpdate != null) {
      newNote = {
        id: noteToUpdate[0].id,
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
    if (!titleRef.current || !bodyRef.current) return;
    addNewNote(newNote);
  };
  return (
    <section className="my-5">
      <div className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="title"
          id="title"
          ref={titleRef}
          className={`${
            theme === "light" ? "bg-gray-100 white" : "bg-gray-900"
          }  w-full py-2 px-2 rounded-md text-sm mb-4`}
          placeholder="Title..."
        />
        <textarea
          name="noteBody"
          id="noteBody"
          ref={bodyRef}
          className={`${
            theme === "light" ? "bg-gray-100 white" : "bg-gray-900"
          }  w-full py-2 px-2 rounded-md text-sm min-h-24 resize-none`}
          placeholder="Description..."
        ></textarea>

        <button
          onClick={createNewNote}
          className={`text-white bg-gray-900 px-4 py-2 text-sm rounded-md mt-4`}
        >
          {noteToUpdate !== null ? "Edit" : "Save"}
        </button>
      </div>
    </section>
  );
}

export default NewNote;
