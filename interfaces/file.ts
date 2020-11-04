export interface FileInterface {
  value: File | null;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}
