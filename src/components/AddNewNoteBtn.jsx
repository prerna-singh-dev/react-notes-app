function AddNewNoteBtn({ addNote }) {
  return (
    <button
      className="w-12 h-12 bg-white rounded-md flex items-center justify-center text-gray-800 cursor-pointer float-right"
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
