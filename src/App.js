import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react"; // Correct import

import './App.css';

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  return (
    <div className="App">
      Text Editor
      <JoditEditor
        ref={editor}
        value={content}
        onChange={newContent => setContent(newContent)}
      />
    </div>
  );
}

export default App;
