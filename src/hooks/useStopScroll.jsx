import { useEffect } from "react";
export default function useStopScroll(isOpen) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup لو الـ component اتشال
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);
}
