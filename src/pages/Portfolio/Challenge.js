import React from "react";
import PropTypes from "prop-types";

const Challenge = ({
  title,
  liveDemo,
  challengePage,
  repo,
  challengeImg,
  todoList,
  level
}) => {
  return (
    <article className="challenge">
      <h3>{title}</h3>
      <table className="greyGridTable">
        <thead>
          <tr>
            <th>
              <a href={liveDemo} rel="noopener noreferrer" target="_blank">
                Live Demo
              </a>
            </th>
            <th>
              <a href={challengePage} rel="noopener noreferrer" target="_blank">
                Challenge
              </a>
            </th>
            <th>
              <a href={repo} rel="noopener noreferrer" target="_blank">
                Code
              </a>
            </th>
            <th>
              {level}
            </th>
          </tr>
        </thead>
      </table>
      <section className="challenge__links"></section>
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

Challenge.propTypes = {
  title: PropTypes.string,
  liveDemo: PropTypes.string,
  challengePage: PropTypes.string,
  repo: PropTypes.string,
  challengeImg: PropTypes.string,
  level: PropTypes.string,
  todoList: PropTypes.array,
};

export default Challenge;
