"use client";

import { useState } from "react";
import styles from "./FaqBox.module.css";

interface FaqProps {
  Question: string;
  Answer: string;
}

function FaqBox({ Question, Answer }: FaqProps) {
  const [isOpen, setIsOpen] = useState(false);

  //   toggle function fron show/hide The Answer
  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.Box}>
      <div onClick={toggleAnswer}>
        <h6>{Question}</h6>
        <h5>{isOpen ? "-" : "+"}</h5>
      </div>
      {isOpen && <p>{Answer }</p>}
    </div>
  );
}

export default FaqBox;
