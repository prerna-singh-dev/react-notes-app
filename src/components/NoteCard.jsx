function NoteCard({ note, deleteNote, editNote }) {
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
    <li className="bg-gray-900 rounded-sm p-4 mb-2 relative">
      <h5 className="text-sm mb-1 flex justify-between overflow-clip">
        <span>{note.title}</span>
        <span className="flex justify-center items-center">
          <button className="cursor-pointer" onClick={() => editNote(note.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 17.25V21h3.75L19.81 7.94l-3.75-3.75L3 17.25z" />
              <path d="M14.06 4.19l3.75 3.75" />
            </svg>
          </button>
          <button
            onClick={() => deleteNote(note.id)}
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
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
      <p className="text-xs">{note.body}</p>
      <span className="right-2 bottom-1 text-[10px] text-gray-400 font-light absolute">
        {createdOn}
      </span>
    </li>
  );
}

export default NoteCard;
