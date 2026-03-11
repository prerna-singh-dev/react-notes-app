import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NoteCard({ note, deleteNote, editNote, onTitleClick }) {
  const { theme } = useContext(ThemeContext);
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  let createdOn = new Date(note.createdOn);
  createdOn = createdOn.toLocaleString("en-GB", options);

  return (
    <li
      className={`${
        theme === "light"
          ? "bg-gray-50 border border-gray-200 hover:border-gray-300"
          : "bg-gray-800/80 border border-gray-700 hover:border-gray-600"
      } rounded-lg p-4 mb-3 relative transition-colors`}
    >
      <h5 className="text-sm font-medium mb-1.5 flex justify-between items-start gap-2 overflow-hidden">
        <span className="truncate">
          <button
            type="button"
            aria-label={`View note: ${note.title}`}
            className="cursor-pointer text-left hover:underline"
            onClick={() => onTitleClick(note)}
          >
            {note.title}
          </button>
        </span>
        <span className="flex justify-center items-center shrink-0 gap-0.5">
          <button
            aria-label="Edit Note"
            type="button"
            className={`${
              theme === "light"
                ? "text-gray-600 hover:text-gray-900"
                : "text-gray-400 hover:text-white"
            } p-1 rounded cursor-pointer transition-colors`}
            onClick={() => editNote(note.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z" />
              <path d="M14.06 4.19l3.75 3.75" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Delete Note"
            onClick={() => deleteNote(note.id)}
            className={`${
              theme === "light"
                ? "text-gray-600 hover:text-red-600"
                : "text-gray-400 hover:text-red-400"
            } p-1 rounded cursor-pointer transition-colors`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </span>
      </h5>
      <p
        className={`text-xs leading-relaxed line-clamp-2 mb-3 ${
          theme === "light" ? "text-gray-600" : "text-gray-300"
        }`}
      >
        {note.body}
      </p>
      <span className="right-3 bottom-2 text-[10px] text-gray-400 font-light absolute">
        {createdOn}
      </span>
    </li>
  );
}

export default NoteCard;
