import { useEffect } from "react";

const useReset = (reset, data, error) => {
  useEffect(() => {
    setTimeout(() => {
      reset();
    }, 5000);
  }, [data, error]);
};

export default useReset;
