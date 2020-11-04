import React from "react";
import { FileInterface } from "../interfaces/file";
import { ButtonColor, Theme } from "../styles/theme";

type Props = {
  data: FileInterface;
  padding?: string;
  color?: ButtonColor;
};

const FileUploader: React.FC<Props> = ({
  data,
  color = Theme.buttonColors.pinkButton,
  padding,
}) => {
  return (
    <div className="input-file-wrapper">
      <label className="custom-file-upload">
        <input type="file" onChange={data.onChange} />
        {data?.value ? "File diterima" : "Pilih file"}
      </label>
      <div className="file-name">{data?.value && data.value?.name}</div>
      <style jsx>{`
        .file-name {
          color: red;
          word-wrap: break-word;
        }
        input[type="file"] {
          display: none;
        }
        .custom-file-upload {
          padding: ${padding};
          outline: 0;
          display: block;
          font-weight: bold;
          border-radius: 10px;
          border: 3px solid ${color.main};
          color: ${color.main};
          cursor: pointer;
        }
        .input-file-wrapper,
        .input-file-wrapper * {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default FileUploader;
