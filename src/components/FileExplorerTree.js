import FileAndFolderItem from "./FileAndFolderItem";
import RootControls from "./RootControls";

export default function FileExplorerTree({ data, onAddItem, onDeleteItem }) {
  const renderTreeContent = () => {
    if (data.length === 0) {
      return (
        <div className="empty">
          No files or folders. Use the buttons above to add one.
        </div>
      );
    }

    return data.map((item) => (
      <FileAndFolderItem
        key={item.id}
        item={item}
        onAddItem={onAddItem}
        onDeleteItem={onDeleteItem}
      />
    ));
  };

  return (
    <div className="explorer" data-testid="file-explorer">
      <RootControls onAddItem={onAddItem}>{renderTreeContent()}</RootControls>
    </div>
  );
}
