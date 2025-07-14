import type { SVGProps } from "react";

export function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 120 120"
      fill="none"
      {...props}
    >
      <rect width="120" height="120" fill="white" />
      <path
        d="M75 45C75 36.7158 68.2845 30 60 30C51.7155 30 45 36.7158 45 45C45 53.2845 51.7155 60 60 60C68.2845 60 75 53.2845 75 45Z"
        fill="#B3B3B3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 13.75C85.5429 13.75 106.25 34.4568 106.25 60C106.25 85.5429 85.5429 106.25 60 106.25C34.4568 106.25 13.75 85.5429 13.75 60C13.75 34.4568 34.4568 13.75 60 13.75Z"
        stroke="#B3B3B3"
        strokeWidth="7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M85 85C85 71.193 73.807 60 60 60C46.1929 60 35 71.193 35 85"
        fill="#B3B3B3"
      />
      <path
        d="M85 85C85 71.193 73.807 60 60 60C46.1929 60 35 71.193 35 85H85Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
