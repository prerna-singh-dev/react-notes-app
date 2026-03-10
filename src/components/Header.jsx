function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <h1 className="text-2xl">Notes</h1>
        <ul className="list-none flex ">
          <li className="mx-2">
            <button className="cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g transform="rotate(25 12 12)">
                  <path
                    d="M9 3L15 3L14 9L18 13L6 13L10 9L9 3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13L12 21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </button>
          </li>
          <li className="mx-2">
            <button className="cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#FFC107" />

                <g stroke="#FFC107" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="1.5" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22.5" />

                  <line x1="1.5" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22.5" y2="12" />

                  <line x1="4.2" y1="4.2" x2="6.8" y2="6.8" />
                  <line x1="17.2" y1="17.2" x2="19.8" y2="19.8" />

                  <line x1="4.2" y1="19.8" x2="6.8" y2="17.2" />
                  <line x1="17.2" y1="6.8" x2="19.8" y2="4.2" />
                </g>
              </svg>
              {/* <svg width="24" height="24">
                <path
                  d="M21 12.5A9 9 0 1 1 11.5 3A7 7 0 0 0 21 12.5Z"
                  fill="#FFD54F"
                />
              </svg> */}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
