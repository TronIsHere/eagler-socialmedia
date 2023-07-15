import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className=" h-64 w-full flex justify-center items-center bg-white rounded-2xl"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex flex-col">
          <FontAwesomeIcon icon={faPlus} size={"2x"}></FontAwesomeIcon>
          <p className="mt-2">Drag or upload your image here</p>
          <span className="bg-red-600 p-2 rounded-lg text-center mt-4 text-white cursor-pointer">
            Select your image
          </span>
        </div>
      )}
    </div>
  );
}
