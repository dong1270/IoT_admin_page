import { useEffect, useRef } from "react";

export const MyInterval = (callback, delay) => {
    const savedCallback = useRef(); 
  
    useEffect(() => {
      savedCallback.current = callback; 
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current(); 
      }
      if (delay !== null) { 
        let id = setInterval(tick, delay); 
        return () => clearInterval(id); 
      }
    }, [delay]); 
  }