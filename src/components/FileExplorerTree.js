import FileAndFolderItem from "./FileAndFolderItem";

export default function FileExplorerTree({ data, onAddItem, onDeleteItem }) {
  return (
    <div className="explorer" data-testid="file-explorer">
      {data.map((item) => (
        <FileAndFolderItem
          key={item.id}
          item={item}
          onAddItem={onAddItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
