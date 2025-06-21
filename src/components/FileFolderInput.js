import { useState } from "react";

const FileFolderInput = ({ isFolder, onAdd, onCancel }) => {
  const [input, setInput] = useState("");

  return (
    <div className="input-wrapper">
      <label>Enter {isFolder ? "Folder" : "File"} name:</label>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => onAdd(input)}>Add</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default FileFolderInput;
