import { useState, useRef, useEffect } from "react";
export default function useScroll(menuOpen) {
  const [isVisible, setIsVisible] = useState(true);
  const scrollref = useRef(0);

  const handlescroll = () => {
    if (menuOpen) return;

    let currentScrollY = window.scrollY;
    // بدل ما يرندر كل بكسل يرندر لما يتخطى عتبة حرجة(قيمة معينة)
    let threshold = Math.abs(currentScrollY - scrollref.current); //Math.abs() القيمة المطلقة
    if (threshold > 120) {
      // {scroll down header disappear scroll up header appear}
      if (currentScrollY < scrollref.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      scrollref.current = currentScrollY;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  });
  return isVisible;
}
