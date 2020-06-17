import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useSelector } from "react-redux";

function CodeBlock(props) {
  const theme = useSelector((state) => state.navbarReducer);
  let codeStyle = atomOneLight;
  if (localStorage.getItem("dark-mode") === "true" || theme.darkMode) {
    codeStyle = atomOneDark;
  } else {
    codeStyle = atomOneLight;
  }

  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={codeStyle}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
