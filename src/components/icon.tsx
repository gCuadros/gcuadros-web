const paths = {
  "arrow-up-right": "M5 19 19 5M5 5h14v14",
  "arrow-right": "M4 12h16m-7-7 7 7-7 7",
  "arrow-left": "M20 12H4m7-7-7 7 7 7",
  check: "m4 12 5 5L20 6",
};

type IconName = keyof typeof paths | "play" | "theme";

// Decorative vectors avoid platform emoji fonts and inherit the surrounding ink.
export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "theme" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" stroke="none" />
        </>
      ) : name === "play" ? (
        <path d="m7 4 14 8-14 8Z" fill="currentColor" stroke="none" />
      ) : (
        <path d={paths[name]} />
      )}
    </svg>
  );
}
