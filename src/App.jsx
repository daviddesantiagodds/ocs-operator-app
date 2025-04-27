import { useState } from "react";

function App() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">OCS Operator Scheduling App</h1>

      {!fileName ? (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
          <p className="mb-4 text-gray-600">Upload your OCS schedule (.xlsx)</p>
          <input
            type="file"
            accept=".xlsx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
          <p className="text-green-600 font-semibold mb-2">File Uploaded:</p>
          <p className="text-gray-700">{fileName}</p>
          <p className="text-gray-500 mt-4">(*Tabs, Dashboard, Scheduling will load here next*)</p>
