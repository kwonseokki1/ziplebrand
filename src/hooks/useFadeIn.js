import { useEffect, useRef } from "react";

function useFadeIn(duration = 0, delay = 0, direction = "left") {
  if (
    typeof duration !== "number" ||
    typeof delay !== "number" ||
    !direction.includes("left", "right", "up", "down")
  ) {
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: "0" } };
}

export { useFadeIn };
