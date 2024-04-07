import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Do something with the selected file, e.g., upload to server
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      // You can perform further operations here, such as sending the file to a server
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div>
      <h2>Upload a PDF or DOC File</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FileUploader;
