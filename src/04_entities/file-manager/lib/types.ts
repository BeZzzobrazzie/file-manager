export type FileManagerProps = {
  open: boolean;
  rootPath?: string;
  onClose: () => void;
}