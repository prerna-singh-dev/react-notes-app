import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NoteViewModal({ isOpen, title, description, onClose }) {
  const { theme } = useContext(ThemeContext);
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-10 flex items-center justify-center rounded-xl"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
    >
      <div
        className="absolute inset-0 rounded-xl bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <section
        className={`${
          theme === "light" ? "bg-white" : "bg-gray-800 text-white"
        } relative z-20 w-3/4 max-w-md max-h-[50vh] overflow-y-scroll rounded-xl p-8 pb-8 shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-3 mb-3">
          <h2
            id="modalTitle"
            className={`${
              theme === "light" ? "text-gray-900 " : "text-white"
            } text-lg font-semibold flex-1 min-w-0 break-words`}
          >
            {title || "Note"}
          </h2>
          <button
            type="button"
            aria-label="Close"
            className={`${
              theme === "light"
                ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                : "text-white hover:bg-gray-800"
            } shrink-0 w-8 h-8 flex items-center justify-center rounded-lg  transition-colors cursor-pointer`}
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <p
          id="modalDesc"
          className={`${
            theme === "light" ? "text-gray-600" : "text-white"
          } text-sm  leading-relaxed whitespace-pre-wrap`}
        >
          {description || ""}
        </p>
      </section>
    </div>
  );
}

export default NoteViewModal;
