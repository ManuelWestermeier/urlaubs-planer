import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./loading-spinner";

export default function useFetch({ pathName = "/", params = {} }) {
  const [data, setData] = useState(<LoadingSpinner />);

  function get() {
    try {
      const url = new URL(window.apiUrl);
      url.pathname = pathName;
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setData(
            <span onClick={get} title={"not loaded data... " + error}>
              [E]
            </span>
          );
        });
    } catch (error) {
      setData(
        <span onClick={get} title={"not loaded data... " + error}>
          [E]
        </span>
      );
    }
  }

  useEffect(get, []);

  return data;
}
