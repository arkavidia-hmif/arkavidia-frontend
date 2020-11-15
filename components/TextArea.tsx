import React from "react";

const TextArea: React.FC = () => {
  return (
    <div id="text-area-wrapper">
      <label className="text-area">
        <div className="title">
          <h2>Text Area</h2>
        </div>
        <textarea name="text-area" id="text-area" placeholder="Test" />
      </label>
      <style jsx>{`
        #text-area-wrapper {
          display: flex;
          flex-direction: column;
          padding: 1rem;
        }

        textarea {
          outline: none;
          resize: none;
          border: none;
          padding: 0.5rem;
          border: 0.15rem solid black;
        }
      `}</style>
    </div>
  );
};

export default TextArea;