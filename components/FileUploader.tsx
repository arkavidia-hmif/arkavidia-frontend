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
      <label className={`custom-file-upload`}>
        <input type="file" onChange={data.onChange} />
        <div className="file-name">
          {data?.value ? data.value?.name : "Pilih file"}
        </div>
      </label>
      <style jsx>{`
        .file-name {
          font-weight: bold;
          word-wrap: break-word;
        }
        input[type="file"] {
          display: none;
        }
      }
      .custom-file-upload {
        border: 3px solid ${color.main};
        color: ${color.main};
          padding: ${padding};
          outline: 0;
          display: block;
          font-weight: bold;
          margin-top: 0.5rem;
          border-radius: 10px;
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
