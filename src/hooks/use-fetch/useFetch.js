import { useEffect, useState, useRef } from "react";

export const useFetch = url => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // called when the component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));
    fetch(url, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (isCurrent.current) {
          setState({ data, loading: false });
        }
      }).catch(err => console.log("error:", err))
  }, [url, setState]);

  return state;
};
