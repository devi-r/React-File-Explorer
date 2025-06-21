# React File Explorer

This project implements a **dynamic and recursive file explorer** component in React. It mimics the behavior of a typical file system viewer, where folders can be expanded or collapsed, and users can add or remove items at any level of the hierarchy.

## Demo

Live Preview: https://react-file-explorer.onrender.com

---

## Key Features

- **Recursive Rendering**  
  Folders can contain nested folders or files to any depth using recursion.

- **Expand/Collapse Functionality**  
  Each folder includes toggle icons to expand or collapse its contents.

- **Add Items**  
  Users can dynamically add a file or folder inside any existing folder.

- **Remove Items**  
  Users can delete files or folders from any level of the hierarchy.

- **State Management**  
  The file tree is managed using React’s `useState`. All updates propagate cleanly through the recursive structure.

- **Minimal Styling**  
  Clean and readable layout using inline styles and icons to enhance user experience.

---

## UI Interactions

- **Expanding Items**: Clicking on a folder toggles visibility of its children.
- **Adding Items**: Clicking "Add Folder" or "Add File" opens a modal input.
  - Modal contains:
    - An input field to type the name of the new file or folder.
    - An **Add** button to submit.
    - A **Cancel** button to dismiss the modal without changes.
- **Removing Items**: Each file or folder has a delete icon to remove it from the structure.

---

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devi-r/React-File-Explorer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd React-File-Explorer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Visit the application in your browser at `http://localhost:3000`.

## License

This project is licensed under the MIT License.

## Author

- **DEVI R** - _Initial work_ - [Devi R](https://www.linkedin.com/in/devi-r-06bb94a7)
