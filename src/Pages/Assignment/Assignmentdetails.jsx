import { useState, useRef } from "react";
import { FaDownLong } from "react-icons/fa6";
import book from "../../assets/bookk.svg";
import sabar from "../../assets/sabaraa.svg";

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
    <div className="w-full flex flex-row items-center justify-center p-4 border-4 border-dotted rounded-4xl border-green-800">
      <img className="relative bottom-20 left-4" src={sabar} alt="" />
      <div className="h-[80vh] w-[900px] p-4 bg-transparent flex items-center justify-center gap-5 flex-col rounded-4xl ">
        <h1 className=" text-black font-serif text-5xl">Assignment Activity</h1>

        <div className="file w-full items-center justify-center flex flex-col xl:flex-row h-[70%] pt-4">
          <div className="box xl:w-[86%] h-[90%] w-full border-4 border-green-900 rounded-4xl  flex flex-col p-3 items-center">
            <h1 className="text-black text-xl font-serif mb-4">
              Maximum file size 1 MB, Maximum number of file: 10
            </h1>

            <div className="icons flex gap-4 mb-4">
              {/* empty after filling data */}
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
              className="dragBox w-[80%] h-[60%] border-3 shadow-md border-green-900 rounded-4xl  flex flex-col items-center justify-center gap-3 p-3 hover:bg-green-50 cursor-pointer"
            >
              <FaDownLong className="xl:text-6xl  lg:text-6xl md:text-6xl text-3xl text-green-900" />
              <p className="text-black font-sans text-md text-center">
                You can drag and drop PDF files here or click to browse
              </p>
            </div>

            {/* Preview of files */}
            <div className="scroll pt-3 w-full font-serif font-bold text-black overflow-auto">
              {files.map((file, index) => (
                <div key={index} className="text-sm text-black">
                  • {file.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="buttons  w-[800px] h-[50px] flex justify-around items-center">
          <button
            onClick={handleSave}
            className="w-[20%] h-[50px] rounded-2xl cursor-pointer hover:translate-y-0.5 text-white font-sans text-[20px] bg-green-900 shadow-md shadow-green-900"
          >
            Save changes
          </button>
          <button
            onClick={handleCancel}
            className="w-[20%] h-[50px] rounded-2xl cursor-pointer hover:translate-y-0.5 text-white font-sans text-[20px] bg-green-900 shadow-md shadow-green-900"
          >
            Cancel
          </button>
        </div>
      </div>
      <img className="relative top-32 left-6" src={book} alt="" />
    </div>
  );
}
