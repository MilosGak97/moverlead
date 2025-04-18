export const LinesIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/30"
    >
      <defs>
        <pattern
          x="100%"
          y={-1}
          id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
          width={200}
          height={200}
          patternUnits="userSpaceOnUse"
        >
          <path d="M130 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="100%" y={-1} className="overflow-visible fill-white/5">
        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
      </svg>
      <rect
        fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
        width="100%"
        height="100%"
        strokeWidth={0}
      />
    </svg>
  );
};
