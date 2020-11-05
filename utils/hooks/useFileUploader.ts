import { useState } from "react";
import { FileInterface } from "../../interfaces/file";

const useFileUploader = (): FileInterface => {
  const [file, setFile] = useState<File | null>(null);

  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      if (e?.target?.files[0]) {
        setFile(e.target.files[0]);
      }
    }
  };
  return {
    value: file,
    set: setFile,
    onChange: handleUploadFile,
  };
};

export default useFileUploader;
