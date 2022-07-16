import { useEffect, useRef, useState } from "react";

const useCheckboxDisabled = (setCheckbox) => {
  const checkboxRef1 = useRef();
  const checkboxRef2 = useRef();
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  useEffect(() => {
    if (checkbox1) {
      checkboxRef2.current.disabled = true;
    } else if (checkbox2) {
      checkboxRef1.current.disabled = true;
    } else if (!checkbox1 && !checkbox2) {
      setCheckbox("");
      checkboxRef1.current.disabled = false;
      checkboxRef2.current.disabled = false;
    }
  }, [checkbox1, checkbox2]);

  return {
    ref: { checkboxRef1, checkboxRef2 },
    state: { setCheckbox1, setCheckbox2, checkbox1, checkbox2 },
  };
};

export default useCheckboxDisabled;
