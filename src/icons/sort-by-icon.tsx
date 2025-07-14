import type { SVGProps } from "react";

export function SortByIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M5.83337 3.33398V16.6673"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1666 15.834V3.33398"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33337 5.83397C8.33337 5.83397 6.49215 3.33399 5.83336 3.33398C5.17456 3.33398 3.33337 5.83398 3.33337 5.83398"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6666 14.166C16.6666 14.166 14.8254 16.666 14.1666 16.666C13.5078 16.666 11.6666 14.166 11.6666 14.166"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
