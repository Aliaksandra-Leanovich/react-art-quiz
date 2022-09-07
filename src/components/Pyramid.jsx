import React from "react";

export const Pyramid = ({ moneyPyramid, questionNumber }) => {
  return (
    <ul>
      {moneyPyramid.map((item) => (
        <li
          className={
            questionNumber === item.id
              ? "moneyListItem active"
              : "moneyListItem"
          }
        >
          <span className="moneyListItemNumber">{item.id}.</span>
          <span className=" moneyListItemAmount">{item.amount}</span>
        </li>
      ))}
    </ul>
  );
};
