import { useState } from "react";
import FileExplorerTree from "./components/FileExplorerTree";
import { initialData } from "./data/initialData";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(initialData);
  const [idCounter, setIdCounter] = useState(7);

  const handleAddItem = ({ name, isFolder, parentId }) => {
    const newItem = { id: idCounter, name, isFolder };

    if (parentId === null) {
      // Add to root level
      setData((prev) => [...prev, newItem]);
    } else {
      // Add to specific parent
      const addToTree = (items) => {
        return items.map((item) => {
          if (item.id === parentId) {
            const children = item.children || [];
            return {
              ...item,
              children: [...children, newItem],
            };
          }
          if (item.children) {
            return {
              ...item,
              children: addToTree(item.children),
            };
          }
          return item;
        });
      };

      setData((prev) => addToTree(prev));
    }

    setIdCounter((prev) => prev + 1);
  };

  const handleDeleteItem = (itemId) => {
    const removeFromTree = (items) => {
      return items
        .filter((item) => item.id !== itemId)
        .map((item) => {
          if (item.children) {
            return {
              ...item,
              children: removeFromTree(item.children),
            };
          }
          return item;
        });
    };

    setData((prev) => removeFromTree(prev));
  };

  return (
    <div className="app">
      <h2>File Explorer</h2>
      <FileExplorerTree
        data={data}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}
