import type { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {
  /** Ángulo de rotación en grados. 0 = izquierda (por defecto) */
  ang?: number;
}

export function SVGArrow({ ang = 0, style, ...props }: ArrowIconProps) {
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
        transform: `rotate(${ang}deg)`,
        transformOrigin: "center",
        transition: "transform 0.2s ease",
        ...style,
      }}
      {...props}
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  );
}