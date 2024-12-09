import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function useFetch(url = "", defaultData = null) {
  const [res, setRes] = useLocalStorage(url, defaultData);
  const [state, setState] = useState("loading...");

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState("loaded");
        setRes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setState("error");
      }
    }
    fetchData();
  }, [url]);

  return [res, state];
}
