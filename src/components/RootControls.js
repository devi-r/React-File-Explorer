import { useState } from "react";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import FileFolderInput from "./FileFolderInput";

const RootControls = ({ onAddItem, children }) => {
  const [toAdd, setToAdd] = useState(null);

  const handleShowInput = (isFolder) => {
    setToAdd({
      isFolder,
      parentId: null, // null indicates root level
    });
  };

  const handleAdd = (name) => {
    onAddItem({
      name,
      isFolder: toAdd.isFolder,
      parentId: toAdd.parentId,
    });
    setToAdd(null);
  };

  return (
    <>
      <div className="root-controls">
        <button className="add-root-btn" onClick={() => handleShowInput(true)}>
          <FiFolderPlus /> Add Root Folder
        </button>
        <button className="add-root-btn" onClick={() => handleShowInput(false)}>
          <AiOutlineFileAdd /> Add Root File
        </button>
      </div>

      {children}

      {toAdd && (
        <FileFolderInput
          isFolder={toAdd.isFolder}
          onAdd={handleAdd}
          onCancel={() => setToAdd(null)}
        />
      )}
    </>
  );
};

export default RootControls;
