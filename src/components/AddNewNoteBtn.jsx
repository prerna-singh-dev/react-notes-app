import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function AddNewNoteBtn({ addNote }) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      type="button"
      aria-label="Add New Note"
      className={`${
        theme === "light"
          ? "bg-gray-800 text-white hover:bg-gray-700 shadow-md hover:shadow-lg"
          : "bg-white text-gray-800 hover:bg-gray-100 shadow-md hover:shadow-lg"
      } w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer float-right transition-all active:scale-95`}
      onClick={addNote}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <line
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          stroke="currentcolor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default AddNewNoteBtn;
