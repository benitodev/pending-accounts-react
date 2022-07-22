import { useState } from "react";

const useForm = () => {
  const [checkbox, setCheckbox] = useState("");
  const [subject, setSubject] = useState("");
  const [money, setMoney] = useState(0);
  const [comments, setComments] = useState("");

  return {
    checkbox,
    subject,
    money,
    comments,
    setCheckbox,
    setSubject,
    setMoney,
    setComments,
  };
};

export default useForm