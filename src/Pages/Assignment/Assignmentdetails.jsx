import { useState, useRef } from "react";
import { FaDownLong } from "react-icons/fa6";

export default function Assignmentdetails() {
  const [files, setFiles] = useState([]);
  const inputRef = useRef();

  const handleFiles = (newFiles) => {
    const validFiles = [];
    const currentFiles = [...files];

    for (let file of newFiles) {
      if (
        file.type === "application/pdf" &&
        file.size <= 1024 * 1024 * 1024 && // 1GB
        currentFiles.length + validFiles.length < 10
      ) {
        validFiles.push(file);
      }
    }

    setFiles([...currentFiles, ...validFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleBrowseFiles = () => {
    inputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleCancel = () => {
    setFiles([]);
  };

  const handleSave = () => {
    if (files.length === 0) {
      alert("Please upload at least one PDF file.");
      return;
    }
    // Here you can add API call to upload files
    alert("Files ready to be sent!");
  };

  return (
    <div className="w-full flex flex-col p-14 pt-32 items-center">
      <h1 className="text-yellow-950/90 h-8 py-2 px-2 text-5xl font-serif pb-24">
        Send your Assignment easily
      </h1>
      <div className="h-[80vh] w-full p-6 bg-yellow-50/20 border-10 border-yellow-950/90 flex gap-5 flex-col rounded-4xl">
        <h1 className=" text-yellow-950/90 font-serif text-4xl">
          Assignment Activity
        </h1>

        <div className="file w-full justify-between flex flex-col xl:flex-row h-[80%]">
          <h1 className="text-2xl text-yellow-950/90 font-serif">
            File Submissions
          </h1>
          <div className="box xl:w-[70%] h-[80%] w-full bg-yellow-50/20 border-4 border-yellow-950/70 shadow-lg rounded-4xl  flex flex-col p-3 items-center">
            <h1 className="text-yellow-950/90 text-xl font-serif mb-4">
              Maximum file size 1 MB, Maximum number of file: 10
            </h1>

            <div className="icons flex gap-4 mb-4">
              {/* هذه المنطقة فارغة بعد حذف الأيقونات */}
              <input
                type="file"
                accept=".pdf"
                multiple
                ref={inputRef}
                onChange={handleFileInputChange}
                hidden
              />
            </div>

            <div
              onClick={handleBrowseFiles}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="dragBox w-[90%] h-[54%] border-3 shadow-md border-yellow-950/70 rounded-4xl bg-yellow-50/20 flex flex-col items-center justify-center gap-3 p-3 hover:translate-y-1 cursor-pointer"
            >
              <FaDownLong className="xl:text-6xl  lg:text-6xl md:text-6xl text-3xl text-yellow-950/70" />
              <p className="text-yellow-950/90 font-serif text-xl text-center">
                You can drag and drop PDF files here or click to browse
              </p>
            </div>

            {/* Preview of files */}
            <div className="scroll pt-3 w-full font-serif font-bold text-yellow-950 overflow-auto">
              {files.map((file, index) => (
                <div key={index} className="text-sm text-yellow-950/90">
                  • {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="buttons w-full h-[40px] gap-5 flex items-center justify-between">
          <button
            onClick={handleSave}
            className="w-[48%] h-[50px] rounded-2xl cursor-pointer hover:translate-y-2 text-amber-50 font-serif text-2xl bg-yellow-950/70 shadow-lg"
          >
            Save changes
          </button>
          <button
            onClick={handleCancel}
            className="w-[48%] h-[50px] rounded-2xl cursor-pointer hover:translate-y-2 text-amber-50 font-serif text-2xl bg-yellow-950/70 shadow-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
