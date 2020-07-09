import React, { useContext } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { atomOneLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ThemeContext from "../../ThemeContext";

function CodeBlock(props) {
  const theme = useContext(ThemeContext);
  let codeStyle = atomOneLight;
  if (localStorage.getItem("dark-mode") === "true" || theme) {
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
