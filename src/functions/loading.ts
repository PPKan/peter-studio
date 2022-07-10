import { useEffect, useState } from "react";

export function loading(number: number) {
  function demoAsyncCall(number: number) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), number));
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    demoAsyncCall(number).then(() => setLoading(false));
    const loader = document.querySelector(".loader");
    if (loader) loader.remove(); // prevent error from loader did not exist
  }, []); // [] = component did mount

  if (loading) {
    return null;
  }
}

