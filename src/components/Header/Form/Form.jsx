import { useState } from "react";

import "./Form.css";

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const getText = () => {
    onClick(text);
  };
  return (
    <div className="page_head">
      <div className="search__container">
        <div className="search">
          <input
            className="input"
            type="text"
            value={text}
            placeholder="Search..."
            onChange={onChangeInput}
          ></input>
          <button className="button" onClick={getText}>
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}
