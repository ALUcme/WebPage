import type { SVGProps } from "react";

export function SVGCircle({ style, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        display: "inline-block",
        flexShrink: 0,
        ...style,
      }}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}