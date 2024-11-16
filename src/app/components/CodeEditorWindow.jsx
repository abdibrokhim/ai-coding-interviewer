// In CodeEditorWindow.jsx
import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const handleEditorChange = (value) => {
    onChange("code", value);
  };

  return (
    <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl w-[80%]">
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "python"}
        value={code}
        theme={theme}
        defaultValue="# some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;