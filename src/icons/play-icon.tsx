import type { SVGProps } from "react";

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none" {...props}>
      <circle cx="24" cy="24.332" r="23.5" fill="black" fillOpacity="0.7" stroke="white" />
      <path d="M17 12.332V36.332L35.8571 24.332L17 12.332Z" fill="white" />
    </svg>
  )
};