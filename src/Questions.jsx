import React from "react";
import SingleQuestion from "./Single-question";

const Questions = ({ questions, toggleQuestion, activeId }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};

export default Questions;
