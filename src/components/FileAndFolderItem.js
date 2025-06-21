import { useState } from "react";
import { MdExpandLess, MdExpandMore, MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";
import FileFolderInput from "./FileFolderInput";

const FileAndFolderItem = ({ item, onAddItem, onDeleteItem }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [toAdd, setToAdd] = useState(null);

  const handleAdd = (name) => {
    onAddItem({
      name,
      isFolder: toAdd.isFolder,
      parentId: item.id,
    });
    setToAdd(null);
  };

  return (
    <div className="item-wrapper">
      <div className="item">
        {item.isFolder && !!item.children?.length && (
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdExpandLess /> : <MdExpandMore />}
          </div>
        )}
        <span>{item.name}</span>
        {item.isFolder && (
          <>
            <FiFolderPlus onClick={() => setToAdd({ isFolder: true })} />
            <AiOutlineFileAdd onClick={() => setToAdd({ isFolder: false })} />
          </>
        )}
        <MdDeleteOutline onClick={() => onDeleteItem(item.id)} />
      </div>

      {isOpen && item.children?.length > 0 && (
        <div className="children">
          {item.children.map((child) => (
            <FileAndFolderItem
              key={child.id}
              item={child}
              onAddItem={onAddItem}
              onDeleteItem={onDeleteItem}
            />
          ))}
          {toAdd && (
            <FileFolderInput
              isFolder={toAdd.isFolder}
              onAdd={handleAdd}
              onCancel={() => setToAdd(null)}
            />
          )}
        </div>
      )}

      {isOpen && (!item.children || item.children.length === 0) && toAdd && (
        <div className="children">
          <FileFolderInput
            isFolder={toAdd.isFolder}
            onAdd={handleAdd}
            onCancel={() => setToAdd(null)}
          />
        </div>
      )}
    </div>
  );
};

export default FileAndFolderItem;
