import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContet] = useState("");
  const contentRef = useRef();
  const onChangecontent = (e) => {
    setContet(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContet("");
  };

  const onKeydwon = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onChangecontent}
        onKeyDown={onKeydwon}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
