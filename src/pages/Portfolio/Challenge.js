import React from "react";

const Challenge = ({
  title,
  liveDemo,
  challengePage,
  repo,
  challengeImg,
  todoList,
}) => {
  return (
    <article className="challenge">
      <h3>{title}</h3>
      <section className="challenge__links">
        <a href={liveDemo} rel="noopener noreferrer" target="_blank">
          Live Demo
        </a>
        <a href={challengePage} rel="noopener noreferrer" target="_blank">
          Challenge
        </a>
        <a href={repo} rel="noopener noreferrer" target="_blank">
          Code
        </a>
      </section>
      <img className="challenges__image" src={challengeImg} alt={title} />
      <span>Reto:</span>
      <ul>
        {todoList.map((todo, i) => {
          if (Array.isArray(todo)) {
            return (
              <ul className="challenge__subList" key={i}>
                {todo.map((subtodo, i) => (
                  <li key={i}>{subtodo}</li>
                ))}
              </ul>
            );
          } else {
            return <li key={i}>{todo}</li>;
          }
        })}
      </ul>
      <hr />
    </article>
  );
};

export default Challenge;
