export interface FileResponse {
  id: string;
  originalFilename: string;
  fileSize: number;
  description: string;
  uploadedBy: string;
  uploadedAt: string;
  fileLink: string;
}

export interface FileInterface {
  value: File | null;
  set: (newFile: File | null) => void;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
