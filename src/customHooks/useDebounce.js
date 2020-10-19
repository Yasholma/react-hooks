import { useState } from "react";

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState("");

  const debounce = (func, wait = 1000) => {
    clearTimeout(typingTimeout);
    let timeout = setTimeout(() => func(), wait);
    setTypingTimeout(timeout);
  };

  return debounce;
};

export default useDebounce;
