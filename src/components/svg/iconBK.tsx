import * as React from "react"
import { useEffect, useState } from "react";
const IconBK = (props : any) => {
  const [color, setcolor] = useState<"#FFF" | "#000">("#FFF");
  useEffect(() => {
    const updateColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setcolor(isDark ? "#FFF" : "#000");
    };
    updateColor(); // Set initial color
    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M24.606 20c.003-5.797 0-17.412 0-17.412S27.97.418 28.702 0v14.064C31.817 10.705 40.973.09 40.973.09s3.077.005 4.742.005l-9.708 11.366C38.144 14.067 42.93 20 42.93 20h-4.661a680.887 680.887 0 0 0-4.707-5.646C31.835 16.11 30.316 18.08 28.78 20h-4.174ZM7.605 14.188h-3.32V5.775h3.287v2.179c2.544 0 5.088.01 7.632-.01 1.369-.009 2.69-.697 2.54-2.236-.134-1.381-1.625-1.63-2.766-1.634-3.057-.004-11.021-.06-11.021-.06C3.204 3.333 0 .011 0 .011s9.404-.016 14.107.007c1.624.006 3.23.344 4.711.993 1.889.82 2.75 2.319 3.006 4.229.24 1.783-.246 3.358-1.393 4.638.41.787.927 1.498 1.168 2.288.613 2.01.312 3.93-1.086 5.571-.866 1.018-2.12 1.492-3.407 1.752-1.14.23-2.312.4-3.472.411C9.127 19.946.1 19.92.1 19.92l3.856-4s8.252-.059 11.37-.068c1.056-.006 2.323-.428 2.42-1.637.104-1.31-.918-2.133-2.17-2.178-2.642-.02-5.34-.163-7.974.005l.003 2.147Z"
    />
  </svg>
  )}
export default IconBK