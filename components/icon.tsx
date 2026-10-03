export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`h-5 w-5 ${className}`}
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
