import { useEffect } from "react";

export default function useTopScroll() {
  useEffect(() => {
    scrollBy({ left: 0, top: 0, behavior: "smooth" });
  }, []);
}