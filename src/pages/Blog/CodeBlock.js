import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ThemeContext from "../../ThemeContext";

const CodeBlock = (props) => {
  const darkMode = useContext(ThemeContext);

  const { language, value } = props;
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

export default CodeBlock;
