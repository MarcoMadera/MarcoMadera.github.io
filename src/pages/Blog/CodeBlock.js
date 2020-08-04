import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ThemeContext from "../../ThemeContext";
import PropTypes from "prop-types";

const CodeBlock = ({ language, value }) => {
  const darkMode = useContext(ThemeContext);
  return (
    <SyntaxHighlighter
      language={language}
      style={
        localStorage.getItem("dark-mode") == "true" || darkMode == true
          ? atomOneDark
          : atomOneLight
      }
    >
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.propTypes ={
  language: PropTypes.string,
  value: PropTypes.string
};

export default CodeBlock;
